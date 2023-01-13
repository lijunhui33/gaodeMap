<template>
    <div>
        <!-- <iframe id="geoPage" width=0 height=0 frameborder=0 style="display:none;" scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=DRSBZ-WO43X-OLO4S-ZOVE5-AB6RV-5WFH2&referer=111">
        </iframe> -->
        <div class="search">
            <!-- <el-input class="search-inp" v-model="address" placeholder="请输入要搜索的地名"></el-input> -->
            <input type="text" class="search-inp" v-model="address" placeholder="请输入要搜索的地名" />
            <div class="search-btn" @click="search">搜索</div>
        </div>
        <div id="container" style="height: 400px;width: 100%;text-align: center;line-height: 500px;font-size: 20px;">
        </div>
        <div class="list">
            <div class="list-item" v-for="(item,index) in list" :key="index" @click="listClick(item)">
                <div class="list-item-left">
                    <div class="list-item-name">{{item.name || ''}}</div>
                    <div class="list-item-address">{{item.addr || ''}}</div>
                </div>
                <div class="list-item-btn">发送</div>
            </div>
        </div>
    </div>
</template>

<script>
const qq = window.qq;
import { Toast, Field } from 'vant';
export default {
    components: {
        Field
    },
    data () {
        return {
            str: '',
            list: [
                // {
                //     addr: 'add123', latLng
                //         : { lat: '123', lng: '123' }
                // }
            ],
            address: ''
        };
    },
    created () {
        document.title = '地图';
    },
    mounted () {
        Toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: '加载地图中...',
        });
        this.type = false;
        this.geolocation = new qq.maps.Geolocation("DRSBZ-WO43X-OLO4S-ZOVE5-AB6RV-5WFH2", "111");
        // this.getLocation();
        this.getGd();
    },
    methods: {
        getGd () {
            const that = this;
            AMap.plugin('AMap.Geolocation', function () {
                var geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：5s
                    buttonPosition: 'RB',    //定位按钮的停靠位置
                    buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

                });
                console.log(geolocation, 'geo');
                geolocation.getCurrentPosition(function (status, result) {
                    if (status == 'complete') {
                        console.log(result);
                        const { lat, lng } = result.position;
                        that.lat = lat;
                        that.lng = lng;
                        that.initAddress(lat, lng);
                    } else {
                        console.log(result, 'err');
                    }
                });
            });
        },
        initAddress (lat, lng) {
            Toast.clear();
            this.isOk = true;
            const that = this;
            this.lat = lat;
            this.lng = lng;
            const geocoder = new TMap.service.Geocoder();
            const location = new TMap.LatLng(lat, lng);
            geocoder
                .getAddress({ location: location }) // 将给定的坐标位置转换为地址
                .then((result) => {
                    const { status, result: r } = result;
                    if (status == 0) {
                        that.list = [
                            { addr: r.address, name: r.formatted_addresses.recommend, latLng: { lat, lng } }
                        ];
                    }

                }).catch(err => {
                    console.log(err, 'err');
                });

            this.initMap();
        },
        search () {
            if (!this.isOk) return;
            if (!this.address) return;
            const that = this;
            const searchService = new qq.maps.SearchService({
                complete: function (results) {
                    if (results.type === "CITY_LIST") {
                        searchService.setLocation(results.detail.cities[0].cityName);
                        if (that.address) {
                            searchService.search(that.address);
                        } else {
                            // searchService.search(that.state.mapKeywords);
                        }
                        return;
                    }
                    const pois = results.detail.pois;
                    that.list = pois.map(item => {
                        return {
                            addr: item.address,
                            latLng: item.latLng,
                            name: item.name
                        };
                    });
                    // that.list = pois;
                    // that.resMapList = pois;
                    // that.setState({
                    //   resMapList: pois,
                    //   visible: true
                    // })
                    const latlngBounds = new qq.maps.LatLngBounds();
                    for (let i = 0, l = pois.length; i < l; i++) {
                        const poi = pois[i];
                        latlngBounds.extend(poi.latLng);
                    }
                    that.map.fitBounds(latlngBounds);
                    if (that.marker) {
                        that.marker.setMap(null);
                        that.marker = new qq.maps.Marker({
                            position: pois[0].latLng,
                            map: that.map
                        });
                    }
                }
            });
            searchService.search(this.address);
        },
        // getLocation () {
        //     this.str = '获取中';
        //     const that = this;
        //     const showPosition = (position) => {
        //         // alert(JSON.stringify(position));
        //         Toast.clear();
        //         this.isOk = true;
        //         const { lat, lng, nation, province, city, addr } = position;
        //         this.str = JSON.stringify(position);
        //         this.lat = lat;
        //         this.lng = lng;
        //         if (this.lat) {
        //             this.type = true;
        //         }
        //         const geocoder = new TMap.service.Geocoder();
        //         const location = new TMap.LatLng(lat, lng);
        //         geocoder
        //             .getAddress({ location: location }) // 将给定的坐标位置转换为地址
        //             .then((result) => {
        //                 const { status, result: r } = result;
        //                 if (status == 0) {
        //                     that.list = [
        //                         { addr: r.address, name: r.formatted_addresses.recommend, latLng: { lat, lng } }
        //                     ];
        //                 }

        //             }).catch(err => {
        //                 console.log(err, 'err');
        //             });
        //         // if (this.type) return;
        //         this.initMap();
        //     };

        //     const showErr = (err) => {
        //         console.log(err, 'test==>');
        //         // this.str = JSON.stringify(err);
        //         this.getLocation();
        //     };
        //     this.geolocation.getLocation(showPosition, showErr, { timeout: 30000 });
        // },
        initMap () {
            const _this = this;
            const myLatlng = new qq.maps.LatLng(this.lat, this.lng);
            // 设置地图属性
            const myOptions = {
                zoom: 15,
                center: myLatlng,
                mapTypeId: qq.maps.MapTypeId.ROADMAP
            };
            // 创建地图，绑定dom
            setTimeout(() => {
                const that = this;
                const map = new qq.maps.Map(document.getElementById("container"), myOptions);
                this.map = map;
                // 现实已经存在的点
                let marker = null;
                if (this.lat) {
                    marker = new qq.maps.Marker({
                        position: myLatlng,
                        map: map
                    });
                }
                this.map = map;
                this.marker = marker;
                this.location = {
                    lat: this.lat,
                    lng: this.lng
                };
                qq.maps.event.addListener(map, "click", function (event) {
                    if (this.disabled) {
                        return;
                    }
                    // 获取详细地址回调
                    const geocoder = new qq.maps.Geocoder({
                        complete: (result) => {
                            // console.log(result.detail)
                            _this.list = result.detail.nearPois.map(item => {
                                return {
                                    addr: item.address,
                                    latLng: item.latLng,
                                    name: item.name
                                };
                            });
                        }
                    });
                    // if (marker) {
                    //     marker.setMap(null);
                    // }
                    if (that.marker) {
                        that.marker.setMap(null);
                    }
                    // 点击出现标记
                    that.marker = new qq.maps.Marker({
                        position: event.latLng,
                        map: map
                    });
                    map.setZoom(20);
                    map.setCenter(event.latLng);
                    // eslint-disable-next-line no-new
                    new qq.maps.LatLng();
                    const a = new qq.maps.LatLng(
                        event.latLng.getLat(),
                        event.latLng.getLng()
                    );
                    geocoder.getAddress(a);
                });
            }, 500);
        },
        listClick (item) {
            try {
                const latlngBounds = new qq.maps.LatLngBounds();
                latlngBounds.extend(item.latLng);
                this.map.fitBounds(latlngBounds);
                if (this.marker) {
                    this.marker.setMap(null);
                    this.marker = new qq.maps.Marker({
                        position: item.latLng,
                        map: this.map
                    });
                }
            } catch (err) {
                console.log(err);
            }
            alert(item.addr);
        }
    }
}
</script>

<style scoped>
.search {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search-inp {
    flex: 1;
    margin-left: 10px;
    border: 1px solid #c2bebe;
    height: 30px;
    border-radius: 4px;
    font-size: 12px;
    padding-left: 10px;
}
.search-btn {
    width: 60px;
    height: 30px;
    background: #07c160;
    margin: 0 10px;
    color: white;
    border-radius: 4px;
    text-align: center;
    line-height: 30px;
}
#container {
    /*地图(容器)显示大小*/
    width: 1200px;
    height: 400px;
}
.list {
    position: absolute;
    top: 450px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow-y: auto;
}
.list-item {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
}
.list-item-left {
    flex-direction: column;
    display: flex;
    justify-content: center;
    flex: 1;
    overflow: hidden;
}
.list-item-address {
    font-size: 12px;
    color: rgb(59, 58, 58);
    padding-top: 10px;
}
.list-item-btn {
    height: 60px;
    line-height: 60px;
    right: 20px;
    font-size: 14px;
    font-weight: bold;
    margin: 0 10px;
}
</style>
// components/test3/test3.js
Component({
    options:{
        // 定义以下划线开头的数据为纯数据字段，仅用作逻辑运行，不做渲染使用，提高运行效率
        pureDataPattern:/^_/
    },
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        _rgb:{
            r:0,
            g:0,
            b:0
        },
        fullColor:'0, 0, 0'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        rAdd(){
            this.setData({"_rgb.r":this.data._rgb.r+5>255?255:this.data._rgb.r+5})
        },
        gAdd(){
            this.setData({"_rgb.g":this.data._rgb.g+5>255?255:this.data._rgb.g+5})
        },
        bAdd(){
            this.setData({"_rgb.b":this.data._rgb.b+5>255?255:this.data._rgb.b+5})
        }
    },
    observers:{
        // 通过*通配符对所有的数据进行监听
        "_rgb.**":function(obj){
            this.setData({fullColor:obj.r+','+obj.g+','+obj.b})
        }
    }
})

// pages/componts/mine_bill.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    subTitle:String,
    btnTitle:String,
    showBill:{
      type:Boolean,
      value: true
    },
    color:String
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _btnAction(){
      this.triggerEvent("btnAction");
    },
    _billAction(){
      this.triggerEvent("billAction");
    }
  }
})

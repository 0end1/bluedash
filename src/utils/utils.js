export default {
    /**
     * 获取指定日期剩下的天数
     * @param date 指定的日期,格式为yyyy-MM-dd
     */
    getRestDays: function (date) {
      var nowDate = new Date()
      var year = nowDate.getFullYear();
      var month = nowDate.getMonth() + 1;
      var day = nowDate.getDate();
      var sDate1 = year + "-" + month + "-" + day;
      var aDate, oDate1, oDate2, iDays;
      aDate = sDate1.split("-");
      oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); //转换为yyyy-MM-dd格式
      aDate = date.split("-");
      oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
      iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
      return iDays; //返回相差天数
    },
    formatDay:function(date){
      var date1 =new Date(date)
      var month = date1.getMonth()+1
      var day= date1.getDate()
      return `${month}月${day}日`
    },
    isMobile: function () {
      return navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    }
  }
  
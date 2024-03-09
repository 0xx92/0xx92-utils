// format.js 格式化文件
function formatToFixed(money, decimals = 2) {
    return (Math.round((parseFloat(money) + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(decimals);
  }
  
  const Format = {
    formatMoney: (money, symbol = "", decimals = 2) => 
      `${symbol}${formatToFixed(money, decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
  };
  
  export default Format;
  
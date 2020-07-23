export default {
  formattedPhoneNumber(value) {
    const nums = value.replace(/\D/g, '').slice(0, 10);

    const matches = nums.match(/(\d\d\d)?(\d\d\d)?(\d+)?/);

    if (matches[1] && matches[2] && matches[3]) {
      return `(${matches[1]}) ${matches[2]}-${matches[3]}`;
    } else if (matches[1] && matches[2]) {
      return `(${matches[1]}) ${matches[2]}-${nums.slice(6)}`;
    } else if (matches[1]) {
      return `(${matches[1]}) ${nums.slice(3)}`;
    } else if (nums.length > 0) {
      return `(${nums}`;
    } else {
      return '';
    }
  }
};

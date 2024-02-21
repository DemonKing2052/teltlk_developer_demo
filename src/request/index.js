function instance(url, method, data) {
  return new Promise((resolve, reject) => {
    const headers = { };
    uni.request({
      url: 'http://114.119.173.191:9503' + url,
      method: method,
      data: data,
      header: headers, 
	  timeout: 5000,
      success: (res) => {
		console.log(res)
        if (res.data.code === 0) {
          resolve(res.data);
        } else {
			 const errorObject = {
			        code: res.data.code,
			        message: res.data.message
			      };
          reject(errorObject);
        }
      },
      fail: (err) => {
		  console.log(res)
        reject(err);
      }
    });
  });
}

export default instance;
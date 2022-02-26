// gets data from json file
export function getData() {
    const axios = window.axios;
    return axios.get("./src/Data.json").then((response) => {
      return response.data;
    });
  }

// TODO: use MongoDB instead of single JSON file
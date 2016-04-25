function saveUserName(name) {
    if (typeof(Storage) !== "undefined") {
      var useName = localStorage.getItem("useName");
      if (!useName) {
        localStorage.setItem("useName", name);
      }
    } else {
      
    }
    return useName;
}

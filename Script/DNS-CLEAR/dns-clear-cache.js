const message = {
    action: "dns_clear_cache"
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.ret) {
        console.log("DNS缓存清理完成✅!");
    } else {
        console.log(resolve.error);
    }
    $done();
}, reject => {
    $done();
});

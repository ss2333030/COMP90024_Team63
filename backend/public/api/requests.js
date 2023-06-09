const requests = {
    coffee_total_request : 'http://admin:password@172.26.135.30:5984/all_twitter/_design/coffee/_view/postTot?stale=ok',
    coffee_lga_request : 'http://admin:password@172.26.135.30:5984/all_twitter/_design/coffee/_view/coffee?group=true&stale=ok',
    coffee_mast_request :  'http://admin:password@172.26.135.30:5984/all_twitter/_design/coffee/_view/coffee?stale=ok',
    coffee_state_request : 'http://admin:password@172.26.135.30:5984/all_twitter/_design/coffee/_view/coffee_state?group=true&stale=ok',
    work_total_request : 'http://admin:password@172.26.135.30:5984/all_twitter/_design/nega/_view/work?stale=ok',
    nega_total_request : 'http://admin:password@172.26.135.30:5984/all_twitter/_design/nega/_view/nega?stale=ok',
    nega_lga_request :  'http://admin:password@172.26.135.30:5984/all_twitter/_design/nega/_view/nega?group=true&stale=ok',
    nega_state_request :  'http://admin:password@172.26.135.30:5984/all_twitter/_design/nega/_view/nega_state?group=true&stale=ok',
    enter_total_request : 'http://admin:password@172.26.135.30:5984/all_twitter/_design/enter/_view/enter?stale=ok',
    enter_lga_request : 'http://admin:password@172.26.135.30:5984/all_twitter/_design/enter/_view/enter?group=true&stale=ok',
    enter_state_request : 'http://admin:password@172.26.135.30:5984/all_twitter/_design/enter/_view/enter_state?group=true&stale=ok',
    sudo_bigB_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/bigB?group=true&stale=ok',
    sudo_smallB_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/smallB?group=true&stale=ok',
    sudo_totB_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/totB?group=true&stale=ok',
    sudo_totSum_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/totB?stale=ok',
    sudo_bSD_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/sd?group=true&stale=ok',
    sudo_bigB_state_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/bigB_state?group=true&stale=ok',
    sudo_smallB_state_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/smallB_state?group=true&stale=ok',
    sudo_totB_state_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/totB_state?group=true&stale=ok',
    sudo_bSD_state_request : 'http://admin:password@172.26.135.30:5984/sudo/_design/busiPercent/_view/sd_state?group=true&stale=ok',
    mastodon_coffee_request : 'http://admin:password@172.26.135.30:5984/mastodon/_design/coffee/_view/coffee?stale=ok',
    mastodon_total_request : 'http://admin:password@172.26.135.30:5984/mastodon/_design/coffee/_view/total?stale=ok',
    mastodon_nega_request : 'http://admin:password@172.26.135.30:5984/mastodon/_design/nega/_view/nega?stale=ok',
    mastodon_work_request : 'http://admin:password@172.26.135.30:5984/mastodon/_design/nega/_view/work?stale=ok',
    sudo_health_request : 'http://admin:password@172.26.135.30:5984/sudo_health/_design/health/_view/health_total?group=true&stale=ok',
    sudo_alchohol_request : 'http://admin:password@172.26.135.30:5984/sudo_health/_design/health/_view/alchohol?group=true&stale=ok',
    sudo_obesity_request : 'http://admin:password@172.26.135.30:5984/sudo_health/_design/health/_view/obesity?group=true&stale=ok',
    sudo_smoker_request : 'http://admin:password@172.26.135.30:5984/sudo_health/_design/health/_view/smoker?group=true&tale=ok',
    sudo_unemp_request : 'http://admin:password@172.26.135.30:5984/sudo_unemp/_design/unemp/_view/unemp?group=true&stale=ok',
    sudo_climate_request : 'http://admin:password@172.26.135.30:5984/sudo_climate/_design/climate/_view/total?group=true&stale=ok',
    sudo_transport_sum_request : 'http://admin:password@172.26.135.30:5984/sudo_climate/_design/climate/_view/sum?group=true&stale=ok',
    sudo_bicycle_request : 'http://admin:password@172.26.135.30:5984/sudo_climate/_design/climate/_view/bicyclegroup=true&stale=ok',
    sudo_bus_request : 'http://admin:password@172.26.135.30:5984/sudo_climate/_design/climate/_view/bus?group=true&stale=ok',
    sudo_scooter_request : 'http://admin:password@172.26.135.30:5984/sudo_climate/_design/climate/_view/scooter?group=true&stale=ok',
    sudo_train_request : 'http://admin:password@172.26.135.30:5984/sudo_climate/_design/climate/_view/train?group=true&stale=ok',
    sudo_tram_request : 'http://admin:password@172.26.135.30:5984/sudo_climate/_design/climate/_view/tram?group=true&stale=ok',
    sudo_walk_request : 'http://admin:password@172.26.135.30:5984/sudo_climate/_design/climate/_view/walk?group=true&stale=ok',
};

module.exports = {requests};


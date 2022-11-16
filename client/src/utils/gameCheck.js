export const gameCheckX = (arr) => {
    if (arr.current[0].getAttribute('src').includes('icon-x') && arr.current[1].getAttribute('src').includes('icon-x') && arr.current[2].getAttribute('src').includes('icon-x')) {
        return true;
    }
    if (arr.current[3].getAttribute('src').includes('icon-x') && arr.current[4].getAttribute('src').includes('icon-x') && arr.current[5].getAttribute('src').includes('icon-x')) {
        return true;
    }
    if (arr.current[6].getAttribute('src').includes('icon-x') && arr.current[7].getAttribute('src').includes('icon-x') && arr.current[8].getAttribute('src').includes('icon-x')) {
        return true;
    }
    if (arr.current[0].getAttribute('src').includes('icon-x') && arr.current[3].getAttribute('src').includes('icon-x') && arr.current[6].getAttribute('src').includes('icon-x')) {
        return true;
    }
    if (arr.current[1].getAttribute('src').includes('icon-x') && arr.current[4].getAttribute('src').includes('icon-x') && arr.current[7].getAttribute('src').includes('icon-x')) {
        return true;
    }
    if (arr.current[2].getAttribute('src').includes('icon-x') && arr.current[5].getAttribute('src').includes('icon-x') && arr.current[8].getAttribute('src').includes('icon-x')) {
        return true;
    }
    if (arr.current[0].getAttribute('src').includes('icon-x') && arr.current[4].getAttribute('src').includes('icon-x') && arr.current[8].getAttribute('src').includes('icon-x')) {
        return true;
    }
    if (arr.current[2].getAttribute('src').includes('icon-x') && arr.current[4].getAttribute('src').includes('icon-x') && arr.current[6].getAttribute('src').includes('icon-x')) {
        return true;
    }
}



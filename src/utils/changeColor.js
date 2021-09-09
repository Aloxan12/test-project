export const markObj = (arr) => {
    const newArr = arr.reduce((acc, item) => {
        return [...acc, {...item, time: item.from, count: 'plus'}, {...item, time: item.to, count: 'minus'}]
    }, []);

    const sortArr = newArr.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
    });

    let count = 0;
    let notWorkCount = 3;
    const coloredItems = [];

    sortArr.forEach(item => {
        if (count < 3) {
            if (item.count === 'plus') {
                count += 1;
            } else {
                count -= 1;
            }
        }

        if (count >= 3 && notWorkCount >= 3) {
            if (item.count === 'plus') {
                notWorkCount += 1;
            } else {
                notWorkCount -= 1;
            }
        }

        if (notWorkCount < 3) {
            coloredItems.push(item.id);
            notWorkCount = 3;
        }
    });

    return coloredItems;
};

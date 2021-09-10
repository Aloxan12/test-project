export const markObj = (arr) => {
    let count = 0;
    let notWorkCount = 3;
    const items = [];

    const newArr = arr.reduce((acc, item) => {
        return [...acc, { id: item.id, time: item.from, count: 'plus'}, {id: item.id, time: item.to, count: 'minus'}]
    }, []);

    const sortArr = newArr.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
    });

    sortArr.forEach((item, index) => {
        if (count < 3) {
            if (item.count === 'plus') {
                count += 1;
            } else {
                count -= 1;
            }
        }

        if (count >= 3) {
            if (notWorkCount >= 3) {
                if (item.count === 'plus') {
                    notWorkCount += 1;
                } else {
                    notWorkCount -= 1;
                }
            }

            if (notWorkCount < 3) {
                sortArr[index-1].count === 'minus' && items.push(sortArr[index-1].id);
                if (item.count === 'plus') {
                    notWorkCount += 1;
                } else {
                    notWorkCount -= 1;
                }
            }
        }
    });

    return [...new Set(items)];
};


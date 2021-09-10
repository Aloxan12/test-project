export
const markObj = (arr) => {
    const newArr = arr.reduce((acc, item) => {
        return [
            ...acc,
            { id: item.id, time: item.from, count: "plus" },
            { id: item.id, time: item.to, count: "minus" }
        ];
    }, []);

    const sortArr = newArr.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
    });

    const a = sortArr.reduce(
        (acc, item, index) => {
            if (acc.count + 1 < 3 && item.count === "plus") {
                console.log({ ...acc, item: item.count, count: acc.count + 1, index });
                return { ...acc, item: item.count, count: acc.count + 1 };
            } else if (acc.count - 1 < 3 && item.count === "minus") {
                acc.items.push(sortArr[index - 1].id);
                console.log({ ...acc, item: item.count, count: acc.count - 1, index });
                return {
                    ...acc,
                    item: item.count,
                    count: acc.count - 1,
                    items: acc.items
                };
            } else if (acc.count + 1 >= 3 && item.count === "plus") {
                return { ...acc, item: item.count, count: acc.count + 1 };
            } else {
                return { ...acc, item: item.count, count: acc.count - 1 };
            }
        },
        { count: 0, item: "", items: [] }
    );

    return a.items;
};


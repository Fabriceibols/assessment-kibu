const staffMembers = [
    { 
        "_id" :0, 
        "name" : "David", 
        "surname" : "Smith", 
        "slug": "david-smith",
        "category" : "operations",
        "title": "Head of Development",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :1, 
        "name" : "John", 
        "surname" : "Jones", 
        "slug": "john-jones",
        "category" : "operations",
        "title": "Head of Marketing",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :2, 
        "name" : "Jane", 
        "surname" : "Sampson", 
        "slug": "jane-sampson",
        "category" : "operations",
        "title": "Head of Content",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :3, 
        "name" : "Nick", 
        "surname" : "Thompson", 
        "slug": "nick-thompson",
        "category" : "operations",
        "title": "Head of Design",
        "reportsTo": "terry-cats"
    },
    { 
        "_id" :4, 
        "name" : "Nick", 
        "surname" : "Jenson", 
        "slug": "nick-jenson",
        "category" : "interns",
        "title": "Intern designer",
        "reportsTo": "nick-thompson" 
    },
    { 
        "_id" :5, 
        "name" : "Simon", 
        "surname" : "Says",
        "slug": "simon-says", 
        "category" : "operations",
        "title": "Head of Strategy",
        "reportsTo": "bruce-davids" 
    },
    { 
        "_id" :6, 
        "name" : "Terry", 
        "surname" : "Cats", 
        "slug": "terry-cats",
        "category" : "c-suite",
        "title": "Chief Creative Officer",
        "reportsTo": "" 
    },
    { 
        "_id" :7, 
        "name" : "Bruce", 
        "surname" : "Davids", 
        "slug": "bruce-davids",
        "category" : "c-suite",
        "title": "Chief Strategy Officer",
        "reportsTo": "" 
    },
    { 
        "_id" :8, 
        "name" : "Bill", 
        "surname" : "Bass", 
        "slug": "bill-bass",
        "category" : "c-suite",
        "title": "Chief Executive Officer",
        "reportsTo": "" 
    }
]

const categories = [
    { 
        "_id" :0, 
        "name" : "Executive", 
        "parent" : "", 
        "slug" : "c-suite" 
    },
    { 
        "_id" :1, 
        "name" : "Operations", 
        "parent" : "c-suite", 
        "slug" : "operations" 
    },
    { 
        "_id" :2, 
        "name" : "Interns", 
        "parent" : "operations", 
        "slug" : "interns" 
    },
];

// Review the instructions to complete this assessment
// console.info('Your application must have the following output:\n');
console.info('* Terry Cats - Chief Creative Officer: Executive\n\t* Nick Thompson - Head of Design: Operations\n\t\t * Nick Jenson - Intern designer: Interns\n* Bruce Davids - Chief Strategy Officer: Executive\n\t* David Smith - Head of Development: Operations\n\t* John Jones - Head of Marketing: Operations\n\t* Jane Sampson - Head of Content: Operations\n\t* Simon Says - Head of Strategy: Operations\n* Bill Bass - Chief Executive Officer: Executive');
// const a3 = staffMembers.map(t1 => ({...t1, ...categories.find(t2 => t2.slug === t1.reportsTo)}))

// console.log(a3);

const hierarchy = (data) => {
    const tree = [];
    const childOf = {};
    data.forEach((item) => {
        const { slug, reportsTo } = item;
        childOf[slug] = childOf[slug] || [];
        item.children = childOf[slug];
        reportsTo ? (childOf[reportsTo] = childOf[reportsTo] || []).push(item) : tree.push(item);
    });
    return tree;
};

// print
console.log(hierarchy(staffMembers, 
                       { idKey: '_id', parentKey: 'reportsTo' }));

/*print
console.log(hierarchy([{"Id":"1", "Name":"abc", "Parent":""},
                        {"Id":"2", "Name":"abc", "Parent":"1"},
                        {"Id":"3", "Name":"abc", "Parent":"2"},
                        {"Id":"4", "Name":"abc", "Parent":"2"}], 
                        { idKey: 'Id', parentKey: 'Parent' }));*/
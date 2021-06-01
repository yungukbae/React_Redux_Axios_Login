const initState = {
    projects:[
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    //action type을 받아 어떤 행동
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project receive:', action.project)
    }

    return state
}

export default projectReducer
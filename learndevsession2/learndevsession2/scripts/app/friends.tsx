// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

///<reference path="../../typings/react/react-global.d.ts" />

interface IFriendProps {
    id?: number,
    key?: number,
    name: string,
    initials: string,
    coursesCount: number,
    articlesCount: number
}

class Friend extends React.Component<IFriendProps, {}> {
    render() {
        return (
            <div className="friend clearfix">
                <div className="clearfix">
                    <div className="friend-initials img-circle pull-left">{this.props.initials}</div>
                    <h4 className="pull-right">{this.props.name}</h4>
                </div>
                <div className="friend-details text-right">
                    <div>{this.props.coursesCount} courses taken</div>
                    <div>{this.props.articlesCount} articles reviewed</div>
                </div>
           </div>
        );
    }
}

interface IFriendsProps {
    data: IFriendProps[]
}

class Friends extends React.Component<IFriendsProps, {}> {
    render() {
        let friendsList: any[] = [];
        this.props.data.forEach((friendItem, idx) => {
            friendsList.push(
                <Friend key={friendItem.id} name={friendItem.name} initials={friendItem.initials} coursesCount={friendItem.coursesCount} articlesCount={friendItem.articlesCount} />
            );
        });
        return (
            <div>
                {friendsList}
            </div>
        );
    }    
}

let friends:IFriendProps[] = [
    { id: 1, name: 'JS Bedard', initials: 'JB', coursesCount: 9, articlesCount: 7 },
    { id: 2, name: 'Jonathan Chamberland', initials: 'JC', coursesCount: 7, articlesCount: 10 },
    { id: 3, name: 'Dominik Lachance', initials: 'DL', coursesCount: 13, articlesCount: 8 },
    { id: 4, name: 'Eric Laflamme', initials: 'EL', coursesCount: 12, articlesCount: 11 },
    { id: 5, name: 'Sebastien Legare', initials: 'SL', coursesCount: 8, articlesCount: 7 },
    { id: 6, name: 'Philippe Matte', initials: 'PM', coursesCount: 4, articlesCount: 19 }
];
ReactDOM.render(<Friends data={friends} />, document.getElementById("friendsNode"));

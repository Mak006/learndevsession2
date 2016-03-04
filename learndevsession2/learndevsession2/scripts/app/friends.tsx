// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

///<reference path="../../typings/react/react-global.d.ts" />



export interface IFriendProps {
    id?: number,
    key?: number,
    name: string,
    initials: string,
    coursesCount: number,
    articlesCount: number
}

export class Friend extends React.Component<IFriendProps, {}> {
    render() {
        return (
            <div className="friend clearfix">
                <div className="clearfix">
                    <div className="friend-initials img-circle pull-left">{this.props.initials}</div>
                    <h4 className="pull-right ">{this.props.name}</h4>
                </div>
                <div className="friend-details text-right">
                    <div>{this.props.coursesCount} courses taken</div>
                    <div>{this.props.articlesCount} articles reviewed</div>
                </div>
           </div>
        );
    }
}

export interface IFriendsProps {
    data: IFriendProps[]
}
export interface IFriendsState {
    data: IFriendProps[]
}

export class Friends extends React.Component<IFriendsProps, IFriendsState> {
    state = {
        data: this.props.data
    }
    updateData(newData: IFriendProps[]) {
        this.setState({
            data: newData
        });
    }
    render() {
        let friendsList: any[] = [];
        this.state.data.forEach((friendItem, idx) => {
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
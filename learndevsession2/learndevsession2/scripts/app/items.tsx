// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

export interface IItemProps {
    id?: number,
    key?: number,
    title: string,
    description: string,
    rating: number,
    href: string
}

export class Item extends React.Component<IItemProps, {}> {
    getRating() : string {
        if (this.props.rating === 0)
            return "n/a";
        else
            return this.props.rating.toFixed(1);
    }

    render() {
        return (
            <div className= "record" >
                <div className="record-details">
                    <a href="{this.props.href}" className="record-title">{this.props.title}</a>
                    <div className="record-comment">
                        {this.props.description}
                    </div>
                </div>
                <div className="record-rating">{this.getRating()}</div>
            </div>
        );
    }
}

export interface IItemsStates {
    data: IItemProps[]
}

export class Items extends React.Component<{}, IItemsStates> {
    state = {
        data: []
    }

    updateData(updatedData: IItemProps[]) {
        this.setState({
            data: updatedData
        });
    }

    render() {
        let itemsList: any[] = [];
        this.state.data.forEach((item, idx) => {
            itemsList.push(
                <Item key={item.id} title={item.title} description={item.description} rating={item.rating} href={item.href} />
            );
        });
        return (
            <div>
                {itemsList}
                </div>
        );
    }
}


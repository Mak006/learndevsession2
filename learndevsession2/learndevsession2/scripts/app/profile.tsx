// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

export interface IProfileDetailsProps {
    isReadOnly: boolean,
    coursesCount: number,
    articlesCount: number,
    articlesOnChange(e: React.FormEvent),
    coursesOnChange(e: React.FormEvent)
}

export class ProfileDetails extends React.Component<IProfileDetailsProps, {}> {
    render() {
        let inputClass = " hidden";
        let pClass = "";
        if (!this.props.isReadOnly) {
            inputClass = "";
            pClass = " hidden";
        }
        return (
        <div>
            <div>
                <label>Courses</label>
                <p className={"form-control-static" + pClass}>{this.props.coursesCount}</p>
                <input type="text" className={`form-control${inputClass}`} defaultValue={this.props.coursesCount.toString()} onChange={this.props.coursesOnChange} />
            </div>
            <div>
                <label>Articles</label>
                <p className={"form-control-static" + pClass}>{this.props.articlesCount}</p>
                <input type="text" className={"form-control" + inputClass} defaultValue={this.props.articlesCount.toString() } onChange={this.props.articlesOnChange} />
            </div>
        </div>
        );
    }
}

export interface IProfileButtonsProps {
    isReadOnly: boolean,
    editClick(e: React.MouseEvent),
    saveClick(e: React.MouseEvent),
    cancelClick(e: React.MouseEvent)

}

export class ProfileButtons extends React.Component<IProfileButtonsProps, {}> {
    render() {
        let editClass = "";
        let saveCancelClass = " hidden";
        if (!this.props.isReadOnly) {
            editClass = " hidden";
            saveCancelClass = "";
        }
        return (
            <div className="row profile-buttons">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <button className={"btn btn-block btn-primary" + editClass} onClick={this.props.editClick}>Edit</button>
                </div>

                <div className="col-md-6">
                    <button className={"btn btn-block btn-danger" + saveCancelClass} onClick={this.props.cancelClick}>Cancel</button>
                </div>
                <div className="col-md-6">
                    <button className={"btn btn-block btn-primary" + saveCancelClass} onClick={this.props.saveClick}>Save</button>
                </div>
            </div>
        );
    }
}

export interface IProfileProps {
    initialCoursesCount: number,
    initialArticlesCount: number    
}

export interface IProfileState {
    isReadOnly?: boolean,
    coursesCount?: number,
    articlesCount?: number
}

export class Profile extends React.Component<IProfileProps, IProfileState> {
    private intermArticlesCount: number;
    private intermCoursesCount: number;
    constructor(props) {
        super(props);
        this.state = {
            isReadOnly: true,
            coursesCount: this.props.initialCoursesCount,
            articlesCount: this.props.initialArticlesCount            
        }
        this.intermArticlesCount = this.props.initialArticlesCount;
        this.intermCoursesCount = this.props.initialCoursesCount;
        
    }
    editClickHandler(e: React.MouseEvent) {
        this.setState({
            isReadOnly: false
        });
    }
    saveClickHandler(e: React.MouseEvent) {
        this.setState({
            isReadOnly: true,
            articlesCount: this.intermArticlesCount,
            coursesCount: this.intermCoursesCount
        });
    }
    cancelClickHandler(e: React.MouseEvent) {
        this.setState({
            isReadOnly: true,
            articlesCount: this.state.articlesCount,
            coursesCount: this.state.coursesCount
        });
    }
    articlesOnChangeHandler(e: React.FormEvent) {
        let detailInput: HTMLInputElement = e.target as HTMLInputElement;
        this.intermArticlesCount = parseInt(detailInput.value);
    }
    coursesOnChangeHandler(e: React.FormEvent) {
        let detailInput: HTMLInputElement = e.target as HTMLInputElement;
        this.intermCoursesCount = parseInt(detailInput.value);
    }
    render() {
        return (
            <div className="profile-details">
                <ProfileDetails coursesCount={this.state.coursesCount} articlesCount={this.state.articlesCount} isReadOnly={this.state.isReadOnly} articlesOnChange={(e) => this.articlesOnChangeHandler(e)} coursesOnChange={(e) => this.coursesOnChangeHandler(e)} />
                <ProfileButtons isReadOnly={this.state.isReadOnly} editClick={this.editClickHandler.bind(this)} saveClick={(e) => this.saveClickHandler(e)} cancelClick={(e) => this.cancelClickHandler(e)}  />
            </div>
        );
    }

}
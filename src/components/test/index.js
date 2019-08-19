import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

// function getinfo() {
//     axios.get('https://api.imjad.cn/qqfm/v1/?type=album&id=102').then((res) => {
//         console.log(res.data.data)
//     })
// }
// getinfo();

class TrData extends React.Component {
    constructor(props) {
        console.log(props)
        // super(props);
    }  
    render() {
        return (
            this.props.albumInfoList.map((v, i) => {
                return (
                    <tr key={v.album.albumID} className="text-center">
                        <td>{v.album.owner.nickname}</td>
                        <td>{v.album.name}</td>
                        <td>{v.album.strTag}</td>
                        <td>{v.album.iconText}</td>
                    </tr>
                )

            })
        )
    }
}
class List extends React.Component {
    //react中，class里的constructor方法是用来初始化state 和绑定事件的方法，其中super作为方法，执行父类的构造函数，参数props即接受父组件传入props
    //如果没有执行super ，react会报错
    constructor(props) {
        super(props);
        this.state = {
            albumInfoList: [],
            isLoaded: false,
        }
    }
    componentDidMount() { //这是个钩子函数
        const _this = this;
        axios.get('https://api.imjad.cn/qqfm/v1/?type=album&id=102')
            .then(function (response) {
                // console.log(response.data.data.albumInfoList)
                _this.setState({
                    albumInfoList: response.data.data.albumInfoList,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })

    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading</div>
        } else {
            return (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center">owner</th>
                            <th className="text-center">name</th>
                            <th className="text-center">tag</th>
                            <th className="text-center">iconText</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrData albumInfoList={this.state.albumInfoList} />
                    </tbody>
                </table>
            )
        }
    }
}

export default List;
import {Component} from 'react'

import { Link } from 'react-router-dom'





const ListItem=(props)=>{
    const {Details}=props
    const {id,author,title,topic,avatarUrl}=Details

    return(
        <Link to={`/blogs/${id}`}>
        <div>
            <h1>{title}</h1>
            <img src={avatarUrl} alt="react"/>
            <p>{topic}</p>
            <p>{author}</p>
            
        </div>
        </Link>
    )

}

class Home extends Component{

    state = { isLoading: false, blogsData: [] }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({ blogsData: formattedData, isLoading: false })
  }

  render() {
    const { blogsData, isLoading } = this.state


    return (
      <div className="blog-list-container">
        {
          blogsData.map(item => <ListItem Details={item} key={item.id} />)
        }
      </div>
    )
  }

      }




      export default Home
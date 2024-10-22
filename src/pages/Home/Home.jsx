import { useState } from "react"
import TopBar from "../../components/TopBar/TopBar"
import { deleteById, find, findOne, updateById } from "../../firebase/model"
import { Button, Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap"
import "./Home.scss"
import { useEffect } from "react"


const Home = () => {

   

    const [edmodal, setedmodal] = useState(false)

    const handleEdModalHide = () => {
      setedmodal(false)
    }

    const handleEdModalshow = () => {
      setedmodal(true)
    }
  
   
 

  const [insData, setInsData] = useState([])

  const getAllData = async () => {
   await find('instragram', setInsData)

  }


  const [sagestmodal, setsagestmodal] = useState(false)

  const handleSagestModalHide = () => {
    setsagestmodal(false)
  }

  const handleSagestModalShow = () => {
    setsagestmodal(true)
  }

const [id , setid] = useState(null)

  const handleItem = (id) => {
    handleSagestModalShow()
    
   setid(id)
    
    
  }

    
// delete functionalaty

  const itemDelete = () => {
    deleteById("instragram",id)
    handleSagestModalHide()
  }

  
// edit functionalaty

    const [input, setinput] = useState({
      name : "",
      caption : "",
      photo : ""

    })

    const handleInputChange = (e) => {

      setinput((prevstate) => ({
        ...prevstate,
        [e.target.name] : e.target.value
      }))
    }
  
  const handleEditItem = async () => {
    
    handleEdModalshow()
    handleSagestModalHide()
    
  const editData = await findOne('instragram', id)

  setinput(editData) 
    
  }
  
  
  const handleUpdateData = async (e) => {
    e.preventDefault()
    await updateById('instragram', id, input)
    setinput({
      name : "",
      caption : "",
      photo : ""
    })
    handleEdModalHide()
  }




useEffect(() => {
  getAllData()

},[])  
  
  return (
     
   <>
    <div className="newsfeed-container">
          <div className="newsfeed-wraper">
            <div className="news-left">
                <TopBar/>
            </div>
            <div className="news-center">
                
                <div className="story-ariya">
                  <div className="story-list">
                   <div className="img-div">
                   <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/321074428_449331034068354_8108996579608713040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVwg0w1PP8y2ZcFAWXjlos9mFfZ_0f9m_2YV9n_R_2bySZErBtCKVacdWftWaZblFlEmltscU_h54Zc31ELiGO&_nc_ohc=JYIaJWhk_9IQ7kNvgEXRCdb&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=ApdEUrFTwWozdMrKCI2UC_p&oh=00_AYBSZJy3J6RDKDi6iwHVYsVqZ0u-6TWfTiKEKzDT5Q8_ig&oe=671D99CC" alt="" />
                   </div>
                    <span>Billa Hasan</span>
                  </div>
                  <div className="story-list">
                    <div className="img-div">
                      <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/462587269_529970433330848_6131796834656307020_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeG1kIM1upBBbZsaZD-M8J0slljAPdAGHkSWWMA90AYeREFUrr1n6zv9mzuYmb7txJRte6_NgZjiDbVj6yCQmDvX&_nc_ohc=PJClugCshtEQ7kNvgE7ybhw&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AZkeXGANpA2_TP6rqZFW3fp&oh=00_AYANSmNYvIodHtYwcED60fNt4PY3B11ylOhwJZ_eFl8NVQ&oe=671DC2E9" alt="" />
                    </div>
                    <span>Atik Hasan</span>
                  </div>
                  <div className="story-list">
                    <div className="img-div">
                    <img src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/462450740_122113226900548911_3472388962838738058_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGrNjZ29YpAoniU_LLF36bCleJSnBGyXVuV4lKcEbJdWwTENOF4KRsiQw6UPwlpJhwAVsH7NK-t41CNjFk8JCBN&_nc_ohc=AwecKGES_DUQ7kNvgHDJcxM&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AjxtJXrZoWgG1wZWTz9Z7bW&oh=00_AYATbQohhOZLnRF3TLSZwmN19q-UjeEbzuMDIuCqfQfOlw&oe=671DBA2C" alt="" />
                    </div>
                    <span>Fahim Shik</span>
                  </div>
                  <div className="story-list">
                   <div className="img-div">
                     <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/349066209_201379959393620_603242672735754853_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE-DXo63AEorz3TFH4SM5Uq1C7cawbbTX_ULtxrBttNf5eCU158aycmpkQSgaCt2jYvuFgz6vb0CghILLEB2ipx&_nc_ohc=2JARjUS9DWsQ7kNvgGLq_ja&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=ApL9Dodwwtdown3v89l5-O1&oh=00_AYD3B-tq2Cgn24_xIdakjyn-TqGfWVu1Fl-XQpbIGI6bqg&oe=671D9F4A" alt="" />
                   </div>
                    <span>Anik hasan</span>
                  </div>
                  <div className="story-list">
                    <div className="img-div">
                    <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/448965026_844329350878196_819712834581967000_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWOEPMDl_OcBVcCc9wd8fIT9pyueYZO6ZP2nK55hk7pqTm1VyWYPuXZU4V4VvgtKWkKcfvO9O9cnWwnTTIzgbF&_nc_ohc=46PcMaI_KYYQ7kNvgFpcqJO&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=A1YdKZRTgvl2ENRnEbDcJrN&oh=00_AYBVF1wwJlE9iUydW0q9-EBUJA5e6FBnrtdjPD6Po2creA&oe=671DB691" alt="" />
                    </div>
                    <span>Rifat</span>
                  </div>
                  <div className="story-list">
                   <div className="img-div">
                     <img src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/456677598_122107778600477861_8910408339062947763_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHSibnnd7oBu39tLoHHpq5rHhQoYE_nZ0geFChgT-dnSKaAvNZDWeaeRedX-LPhTTDBest8cFYQ9yj61HJjC0Q2&_nc_ohc=jYYZ6h-3JVQQ7kNvgE3rUb1&_nc_zt=23&_nc_ht=scontent.fdac24-3.fna&_nc_gid=Ao8q5HUcZUJVAe_mbAkDyRv&oh=00_AYCKv6di9F7P8A1WV-myg7p-Lfv2ti6qxc_zxHkQVtBWYQ&oe=671DE28B" alt="" />
                   </div>
                    <span>Hridoy</span>
                  </div>
                  <div className="story-list">
                    <div className="img-div">
                      <img src="https://i.pinimg.com/564x/9c/f2/6a/9cf26ab6f7121b83944a6a1ff3a436f2.jpg" alt="" />
                    </div>
                    <span>Md Akash</span>
                  </div>
                  <div className="story-list">
                    <div className="img-div">
                      <img src="https://i.pinimg.com/564x/c2/be/4d/c2be4da7b80b78d421cbc08a33583738.jpg" alt="" />
                    </div>
                    <span>Fariya</span>
                  </div>
                </div>

              <div className="post-ariya">
                {insData?.map((item,index) => {
                  return  <div className="post-item" key={index}>
                  <div className="post-header">
                    <div className="left">
                      <img style={{marginTop : "-3px"}} src={item.photo} alt="" />
                      <div className="content">
                      <span>{item.name}</span> 
                      <span className="post-date">5d</span>
                      <a href="">. Follow</a>
                      <p>atif aslam</p>
                      </div>
                    </div>
                    <div  className="right">
                    <svg onClick={() => handleItem(item.id)}  aria-label="More options" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                    </div>
                  </div>
                  <div className="post-content">
                    <img style={{marginTop : "10px"}} src={item.photo}alt="" />
                  </div>
                  <div className="post-footer">
                    <div className="action">
                      <div className="reaction">
                        <ul>
                          <li><a href="">
                          <svg  aria-label="Like" className="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                           </a></li>
                          <li><a href="">
                          <svg aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                           </a></li>
                          <li><a href="">
                          <svg aria-label="Share Post" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                           </a></li>
                        </ul>
                      </div>
                      <div className="saved">
                      <svg aria-label="Save" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                      </div>
                    </div>
                    <div className="content">
                      <span>524 likes</span>
                      <p><a href="">{item.name}</a> {item.caption}
                      </p>
                      <p className="view-all-comment">
                        View all 5k comment
                      </p>
                     <input type="text" placeholder="Add a comment" />
                      <div className="emoji">
                      <svg aria-label="Emoji" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="13" role="img" viewBox="0 0 24 24" width="13"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                      </div>
                     <hr />
                    </div>
                  </div>
                </div>
                })}
                
             
              </div>
                

            </div>
            <div className="news-right">
                <div className="profile-section">
                 <div className="left">
                  <img src="https://i.pinimg.com/736x/62/27/25/622725a2b38c1fb2f1dc75ba18a2c505.jpg" alt="" />
                  <div className="content">
                    <span>coder_akash</span>
                    <p>Fariya Akter</p>
                  </div>
                 </div>
                 <div className="right">
                  <a href="">Switch</a>
                 </div>
                </div>
                <div className="follow-header">
                  <p>Suggested for you</p>
                  <a href="">See all</a>
                </div>
                <div className="follow-section">
                <div className="left">
                  <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/321074428_449331034068354_8108996579608713040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVwg0w1PP8y2ZcFAWXjlos9mFfZ_0f9m_2YV9n_R_2bySZErBtCKVacdWftWaZblFlEmltscU_h54Zc31ELiGO&_nc_ohc=JYIaJWhk_9IQ7kNvgEXRCdb&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=ApdEUrFTwWozdMrKCI2UC_p&oh=00_AYBSZJy3J6RDKDi6iwHVYsVqZ0u-6TWfTiKEKzDT5Q8_ig&oe=671D99CC" alt="" />
                  <div className="content">
                    <span>Md Billal</span>
                    <p>Suggested for you
                    </p>
                  </div>
                 </div>
                 <div className="right">
                  <a href="">Follow</a>
                 </div>
                </div>
                <div className="follow-section">
                <div className="left">
                  <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/349066209_201379959393620_603242672735754853_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE-DXo63AEorz3TFH4SM5Uq1C7cawbbTX_ULtxrBttNf5eCU158aycmpkQSgaCt2jYvuFgz6vb0CghILLEB2ipx&_nc_ohc=2JARjUS9DWsQ7kNvgGLq_ja&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=ApL9Dodwwtdown3v89l5-O1&oh=00_AYD3B-tq2Cgn24_xIdakjyn-TqGfWVu1Fl-XQpbIGI6bqg&oe=671D9F4A" alt="" />
                  <div className="content">
                    <span>Md Anik</span>
                    <p>Suggested for you</p>
                  </div>
                 </div>
                 <div className="right">
                  <a href="">Follow</a>
                 </div>
                </div>
                <div className="follow-section">
                <div className="left">
                  <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/448965026_844329350878196_819712834581967000_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWOEPMDl_OcBVcCc9wd8fIT9pyueYZO6ZP2nK55hk7pqTm1VyWYPuXZU4V4VvgtKWkKcfvO9O9cnWwnTTIzgbF&_nc_ohc=46PcMaI_KYYQ7kNvgFpcqJO&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=A1YdKZRTgvl2ENRnEbDcJrN&oh=00_AYBVF1wwJlE9iUydW0q9-EBUJA5e6FBnrtdjPD6Po2creA&oe=671DB691" alt="" />
                  <div className="content">
                    <span>Md Rifat</span>
                    <p>Suggested for you</p>
                  </div>
                 </div>
                 <div className="right">
                  <a href="">Follow</a>
                 </div>
                </div>
                <div className="follow-section">
                <div className="left">
                  <img src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/462450740_122113226900548911_3472388962838738058_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGrNjZ29YpAoniU_LLF36bCleJSnBGyXVuV4lKcEbJdWwTENOF4KRsiQw6UPwlpJhwAVsH7NK-t41CNjFk8JCBN&_nc_ohc=AwecKGES_DUQ7kNvgHDJcxM&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AjxtJXrZoWgG1wZWTz9Z7bW&oh=00_AYATbQohhOZLnRF3TLSZwmN19q-UjeEbzuMDIuCqfQfOlw&oe=671DBA2C" alt="" />
                  <div className="content">
                    <span>Fahim Shikder</span>
                    <p>Suggested for you</p>
                  </div>
                 </div>
                 <div className="right">
                  <a href="">Follow</a>
                 </div>
                </div>
                <div className="follow-section">
                <div className="left">
                  <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/462587269_529970433330848_6131796834656307020_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeG1kIM1upBBbZsaZD-M8J0slljAPdAGHkSWWMA90AYeREFUrr1n6zv9mzuYmb7txJRte6_NgZjiDbVj6yCQmDvX&_nc_ohc=PJClugCshtEQ7kNvgE7ybhw&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AZkeXGANpA2_TP6rqZFW3fp&oh=00_AYANSmNYvIodHtYwcED60fNt4PY3B11ylOhwJZ_eFl8NVQ&oe=671DC2E9" alt="" />
                  <div className="content">
                    <span>Atik Islam</span>
                    <p>Suggested for you</p>
                  </div>
                 </div>
                 <div className="right">
                  <a href="">Follow</a>
                 </div>
                </div>
            </div>
          </div>
        </div>

        
        <Modal show ={sagestmodal} centered onHide={handleSagestModalHide}>

        <ModalBody>
           <form action="">
           <ul style={{cursor : "pointer"}} className="list-group text-center">
              <li onClick={handleEditItem} name ="edit" className="list-group-item mb-2 shadow bg-warning "><a href=""></a>E-dit</li>
              <li onClick={itemDelete}  name = "delete" className="list-group-item mb-2 shadow bg-danger text-white"><a href=""></a>Delete</li>
              <li className="list-group-item mb-2 shadow"><a href=""></a>Cancle</li>
             
            </ul>
           </form>
        </ModalBody>
    </Modal>


{/* edit modal */}


<Modal show ={edmodal} centered onHide={handleEdModalHide}>
        <ModalHeader>
            <ModalTitle>
                <h2>Upload instagram New Post</h2>
            </ModalTitle>
        </ModalHeader>
        <ModalBody>
            <form action="" onSubmit={handleUpdateData} >
               <div className="my-3">
               <label htmlFor="">Name</label>
                <input name="name" value={input.name} onChange={handleInputChange} type="text" className="form-control" />
               </div>
               <div className="my-3">
               <label htmlFor="">caption</label>
                <input name="caption" value={input.caption} onChange={handleInputChange} type="text" className="form-control" />
               </div>
               <div className="my-3">
               <label htmlFor="">photo</label>
                <input name="photo" value={input.photo} onChange={handleInputChange} type="text" className="form-control" />
               </div>
           
               <div className="my-3">
                <Button type="submit">Create</Button>
               </div>
            </form>
        </ModalBody>
    </Modal>


   </>

          
    // <AuthTemp/>
  )
}

export default Home
import { Collapse, List, ListItemButton, ListItemText, TextField } from '@mui/material'
import React, { useState } from 'react'

import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

const Plan = () => {

    const [ open, setopen] = React.useState(false)
    const [ open2, setopen2] = React.useState(false)
    const [ open3, setopen3] = React.useState(false)
    const [ open4, setopen4] = React.useState(false)
    const [ open5, setopen5] = React.useState(false)
    const [ open6, setopen6] = React.useState(false)

    const handleClick = () =>{
        setopen(!open)
        setopen2(false)
        setopen3(false)
        setopen4(false)
        setopen5(false)
        setopen6(false)
        
    }
    const handleClick2 = () =>{
        setopen2(!open2)
        setopen(false)
        setopen3(false)
        setopen4(false)
        setopen5(false)
        setopen6(false)
        
    }
    const handleClick3 = () =>{
        setopen3(!open3)
        setopen(false)
        setopen2(false)
        setopen4(false)
        setopen5(false)
        setopen6(false)
        
    }
    const handleClick4 = () =>{
        setopen4(!open4)
        setopen(false)
        setopen2(false)
        setopen3(false)
        setopen5(false)
        setopen6(false)
        
    }
    const handleClick5 = () =>{
        setopen5(!open5)
        setopen(false)
        setopen2(false)
        setopen3(false)
        setopen4(false)
        setopen6(false)
        
    }
    const handleClick6 = () =>{
        setopen6(!open6)
        setopen(false)
        setopen2(false)
        setopen3(false)
        setopen4(false)
        setopen5(false)
        
    }



  return (
    <>
          <div className='container-fluid' style={{ borderTop:"8px solid #222", backgroundColor:"#000000"}}>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-8 ps-4  d-flex mx-auto' >
                  <div className='w-100 '>
                    <List>
                      <ListItemText>
                         <div className='h1 text-center w-100 fw-bolder' style={{fontSize:"3.112rem", marginTop:"65px", textAlign:"center", color:"#ffffff", marginBottom:"3.1rem"}} >Frequently Asked Questions</div>
                      </ListItemText>

                      {/* Button 1 */}
                    <ListItemButton onClick={handleClick} >
                        <ListItemText ><div  style={{marginTop:"-18px",display:"flex",width:"100%",flexDirection:"row",lineHeight:"1.8rem", fontSize:"28px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", padding:"24px", color:"#ffffff"}}>what is NetFlix?
                          <div style={{marginLeft:"auto"}}>{ open? <ClearIcon />:<AddIcon/>}</div>
                        </div></ListItemText>

                    </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemText className='text-white ms-3 pe-3'>
                                    <div style={{lineHeight:"1.8rem", fontSize:"25px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", lettrSpacing:"0", wordSpacing:"0", border:"1px solid black", marginTop:"-20px", padding:"29px" }}>
                                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                    <br/><br/>
                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                    </div>
                                </ListItemText>
                            </List>
                        </Collapse> 
                      {/* Button 2 */}
                    <ListItemButton onClick={handleClick2} >
                        <ListItemText ><div  style={{marginTop:"-18px",display:"flex",width:"100%",flexDirection:"row",lineHeight:"1.8rem", fontSize:"28px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", padding:"24px", color:"#ffffff"}}>How much does Netflix cost?
                          <div style={{marginLeft:"auto"}}>{ open2?<ClearIcon />:<AddIcon/>}</div>
                        </div></ListItemText>

                    </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemText className='text-white ms-3 pe-3'>
                                    <div style={{lineHeight:"1.8rem", fontSize:"25px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", lettrSpacing:"0", wordSpacing:"0", border:"1px solid black", marginTop:"-20px", padding:"29px" }}>
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                    </div>
                                </ListItemText>
                            </List>
                        </Collapse> 

                          {/* Button 3 */}
                    <ListItemButton onClick={handleClick3} >
                        <ListItemText ><div  style={{marginTop:"-18px",display:"flex",width:"100%",flexDirection:"row",lineHeight:"1.8rem", fontSize:"28px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", padding:"24px", color:"#ffffff"}}>Where can I watch?
                          <div style={{marginLeft:"auto"}}>{ open3?<ClearIcon />:<AddIcon/>}</div>
                        </div></ListItemText>

                    </ListItemButton>
                        <Collapse in={open3} timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemText className='text-white ms-3 pe-3'>
                                    <div style={{lineHeight:"1.8rem", fontSize:"25px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", lettrSpacing:"0", wordSpacing:"0", border:"1px solid black", marginTop:"-20px", padding:"29px" }}>
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                   <br/><br/>
                                   You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.  </div>
                                </ListItemText>
                            </List>
                        </Collapse> 

                          {/* Button 4 */}
                    <ListItemButton onClick={handleClick4} >
                        <ListItemText ><div  style={{marginTop:"-18px",display:"flex",width:"100%",flexDirection:"row",lineHeight:"1.8rem", fontSize:"28px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", padding:"24px", color:"#ffffff"}}>How do I cancel?
                          <div style={{marginLeft:"auto"}}>{ open4?<ClearIcon />:<AddIcon/>}</div>
                        </div></ListItemText>

                    </ListItemButton>
                        <Collapse in={open4} timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemText className='text-white ms-3 pe-3'>
                                    <div style={{lineHeight:"1.8rem", fontSize:"25px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", lettrSpacing:"0", wordSpacing:"0", border:"1px solid black", marginTop:"-20px", padding:"29px" }}>
                                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                    </div>
                                </ListItemText>
                            </List>
                        </Collapse> 

                          {/* Button 5 */}
                    <ListItemButton onClick={handleClick5} >
                        <ListItemText ><div  style={{marginTop:"-18px",display:"flex",width:"100%",flexDirection:"row",lineHeight:"1.8rem", fontSize:"28px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", padding:"24px", color:"#ffffff"}}>What can I watch on Netflix?
                          <div style={{marginLeft:"auto"}}>{ open5?<ClearIcon />:<AddIcon/>}</div>
                        </div></ListItemText>

                    </ListItemButton>
                        <Collapse in={open5} timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemText className='text-white ms-3 pe-3'>
                                    <div style={{lineHeight:"1.8rem", fontSize:"25px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", lettrSpacing:"0", wordSpacing:"0", border:"1px solid black", marginTop:"-20px", padding:"29px" }}>
                                     Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                    </div>
                                </ListItemText>
                            </List>
                        </Collapse> 

                          {/* Button 6 */}
                    <ListItemButton onClick={handleClick6} >
                        <ListItemText ><div  style={{marginTop:"-18px",display:"flex",width:"100%",flexDirection:"row",lineHeight:"1.8rem", fontSize:"28px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", padding:"24px", color:"#ffffff"}}>Is Netflix good for kids?
                          <div style={{marginLeft:"auto"}}>{ open6?<ClearIcon />:<AddIcon/>}</div>
                        </div></ListItemText>

                    </ListItemButton>
                        <Collapse in={open6} timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemText className='text-white ms-3 pe-3'>
                                    <div style={{lineHeight:"1.8rem", fontSize:"25px", fontFamily:"sans-serif", fontWeight:"400", backgroundColor:"#303030", lettrSpacing:"0", wordSpacing:"0", border:"1px solid black", marginTop:"-20px", padding:"29px" }}>
                                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                    <br/> <br/>
                                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.                                    </div>
                                </ListItemText>
                            </List>
                        </Collapse> 
                    </List>

                    <div>
                    <div className='text-white fs-5 text-center mt-5'>Ready to watch? Enter your email to create or restart your membership..</div>
                    <form className='d-flex flex-1 m-auto mt-2 bg-white ps-3'>
                              <TextField id='email'  variant='standard' InputProps={{disableUnderline:true}} label="email address" className='form-control' style={{fontSize:"22px", height:"70px"}}/>
                            <span><button className='btn text-white fs-4' style={{width:"300px", height:"100%", borderRadius:"0", backgroundColor:"red"}}>Get Started</button></span>  
                     </form>
                    </div>

                 


                 </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Plan
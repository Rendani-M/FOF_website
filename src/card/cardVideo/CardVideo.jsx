// import { useTheme } from '@emotion/react';
import { Box, Card, CardContent,  Typography } from '@mui/material'
import React from 'react'
// import { makeRequest } from '../../axios';
// import axios from 'axios';

function CardVideo() {
    // const [videos, setVideos]= useState([]); 

    // useEffect(() => {
    //     const getTopVideo = async () => {
    //       try {
    //         const res = await makeRequest.get("?fields=videos{embed_html,views,title}&access_token=" + process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN);
    //         // console.log("Videos", res.data.videos.data);
    //         
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     };
    //     getTopVideo();
    // }, []);

    // useEffect(() => {
    //     const fetchAllVideos = async (url) => {
    //         const videos = [];
    //         let counter=0;
    //         while (url!=='') {
                
    //             const response = await axios.get(url);
    //             if(counter ===0){
    //                 console.log(response.data.videos);  // Log the videos data
    //                 videos.push(...response.data.videos.data);
    //                 url = response.data.videos.paging?.next;  // Get the URL for the next page of data
    //             }
    //             else if(counter < 4){
    //                 console.log(response.data);  
    //                 videos.push(...response.data.data);
    //                 url = response.data.paging?.next;
    //             }
    //             console.log("Videos pushed", videos);
    //             console.log("Videos next", url);
    //             counter++;
    //         }
    //         return videos;
    //     };
    
    //     const url = process.env.REACT_APP_FACEBOOK_URL+"?fields=videos{embed_html,views,title}&access_token=" + process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN;
    //     fetchAllVideos(url).then(videos => setVideos(videos));
    // }, [videos]);
    
    
    // const theme = useTheme();
    return (
        <Card sx={{ display: 'flex', width:'80%', height:'80%', paddingBottom:'1em' }}>
            <Box sx={{ width: "60%" }}>
                {/* <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkeflamesoffire%2Fvideos%2F248855884183390%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}
                <iframe width="100%" height="100%" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkeflamesoffire%2Fvideos%2F248855884183390%2F&show_text=true" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                </iframe>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom :'1em' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        HOW TO PROSPER THROUGH GOD
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Apostle Alfred Makhavhu
                    </Typography>
                </CardContent>
                <Box sx={{ height:'100%', width:'35em', display:'flex', justifyContent:'center' }}>
                    <Typography sx={{ width:'70%', textAlign:'justify' }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Expedita illum sequi ex animi quaerat nihil dignissimos fuga 
                        distinctio? Quaerat accusamus tenetur voluptas sed ipsum tempora 
                        consectetur voluptatibus ducimus hic velit nobis voluptatum, 
                        pariatur, nihil beatae! Non corrupti quisquam optio dolorum 
                        molestiae possimus, quia recusandae eius, consequuntur aut ullam 
                        ut perspiciatis ex aliquid nobis exercitationem delectus adipisci 
                        cum quaerat culpa alias beatae. Suscipit facilis laboriosam, 
                        nostrum distinctio aliquam perspiciatis atque at nihil tenetur 
                        minima iure autem nam dolorem dignissimos obcaecati dolores ea 
                        esse! Reiciendis fugiat magni vel veniam ducimus maiores, 
                        veritatis nobis perspiciatis! Beatae molestiae, id labore nisi 
                        odit ipsum cumque.
                    </Typography>
                </Box>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrow sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                    </IconButton>
                </Box> */}
            </Box>
        </Card>
    
    );
}

export default CardVideo
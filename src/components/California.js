import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaCompass } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
// import { Button } from './Button'
import Aos from "aos"
import "aos/dist/aos.css"

const California = () => {
useEffect(() => {
    Aos.init({})
}, [])

const data = useStaticQuery(graphql`
    query {
    allFile(
        filter: {
        ext: { regex: "/(jpg)|(png)|(jpeg)/" }
        name: { in: ["california"] }
        }
    ) {
        edges {
        node {
            childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    }
    }
`)
return (
    <BlogPage>
    <BlogContainer>
        <ContentWrapper>
        <FaCompass
            css={`
            color: #cc9999;
            font-size: 2rem;
            margin-bottom: 1rem;
            `}
        />
        <TopLine>Unforgettable Road Trip</TopLine>
        <h1>Cruising the California Coast</h1>

        {data.allFile.edges.map((image, key) => (
            <Image key={key} fluid={image.node.childImageSharp.fluid} />
        ))}

        <BlogBody>
            <h2>
            It’s the year of the road trip with many pandemic-related travel restrictions still in place and if you’re in need of views that take your breath away, then a hop in the car and a cruise along Highway 1 will give you just that. 
            </h2>

            <p>
            With the sprawling San Francisco skyline in your rearview, you’ll head south towards charming Monterey, about two hours, but it’s best if you take your time and embrace little stops along the way. In Monterey, you’ll want to stroll through Fisherman’s Wharf, grab a bite at Cannery Row and of course spend a few hours in the Monterey Bay Aquarium.
            </p>
            <p>
            From here, you’ll follow the picturesque coastline along the 17-Mile Drive to Pebble Beach, which you may know for its golf course,  but a stop at Fanshell Overlook is a must for spotting harbor seals and Cypress Point Lookout where you’ll find The Lone Cypress, quite possibly the most photographed tree in North America.
            </p>
            <p>
            Next up is storybook Carmel-by-the-Sea, an artistic town with a stunning beach, cottages on every corner and an area you won’t find a bad meal.  A bit quirky: neon signs and honking cars are two things that are not allowed but results in that simple life mentality we all can crave with local shops, easy walking and window shopping and the dreamiest homes.
            </p>
            <p>
            Further along, you’re greeted with cliffs, crashing waves and plenty of areas to stop off on your way to Big Sur. This is easily one of the most incredible drives of the whole trip. Bixby Bridge is one must-stop with a couple of easy turnoffs to get out and grab your camera. You’ll recognize it from several car commercials and of course if you’re a fan of the HBO drama, Big Little Lies. Not only is the structure beautiful, but the drop off looking out provides you with awe-inspiring rocky sea views.
            </p>
            <p>
            Lastly, hugging the curves of the highway, you reach Big Sur with majestic cliffs and the Pacific Ocean stretching as far as the eye can see. Julia Pfeiffer Burns State Park is one stop - prepare to pull over to see the stunning 80-foot McWay Falls. Explore redwoods, coastal overlooks, meadows, bluffs and beaches with an array of hiking options from short hikes of a few miles to more strenuous stretches in the 8-10 mile range.
            </p>
            <p>
            As a perfect end to the trip, be sure to head to the secluded Pfeiffer Beach for the famed purple sand and a memorable sunset through Keyhole Rock.
            </p>
            <p>
            Road trips aren’t about the final destination, but the wild discoveries along the way. It’s okay to get a little lost, to get off the direct path. Those moments produce the best memories. Isn’t that the beauty of travel anyway?
            </p>
            <p className='subhead'>Recommended Stays</p>
            <ul>
                <li><Link to='https://www.pebblebeach.com/'>Casa Palmero at Pebble Beach Resorts</Link></li>
                <li><Link to='https://www.postranchinn.com/'>Post Ranch Inn</Link></li>
                <li><Link to='https://www.ventanabigsur.com/'>Ventana Big Sur, an Alila Resort</Link></li>
            </ul>
            <p>All are Virtuoso accommodations where, as your advisor, I can provide the following amenities:</p>
            <ul>
                <li>Upgrade on arrival, subject to availability</li>
                <li>Daily breakfast for two</li>
                <li>$100 resort credit</li>
                <li>Early check-in/late check-out, subject to availability</li>
                <li>Complimentary Wi-Fi</li>
            </ul>
        </BlogBody>
        </ContentWrapper>
    </BlogContainer>
    </BlogPage>
)
}

export default California

const BlogPage = styled.div`
background-color: #fffff0;
padding-left: 1rem;
padding-right: 1rem;
`

const BlogContainer = styled.div`
background-color: #fffff0;
/* margin: .5rem; */
width: 90%;
background: #fffff0;
color: #2a2a2a;
padding: 5rem calc((100vw - 1300px) / 2);
height: 100%;
max-width: 1400px;
margin: 0 auto;
`

const TopLine = styled.p`
color: #cc9999;
font-size: 1rem;
margin-bottom: 0.75rem;
`

const ContentWrapper = styled.div`
padding: 1rem;
justify-content: center;
margin: 0 auto;
`

// const ColumnOne = styled.div`
// display: grid;
// grid-template-rows: 1fr;
// `

const BlogBody = styled.div`
padding-top: 1rem;
justify-content: center;


h1 {
font-size: clamp(1.5rem, 6vw, 4rem);
font-family: 'Playfair Display';
font-style: italic;
margin: 1rem;
margin-bottom: 1rem;
letter-spacing: 3px;
padding: 0 1rem;
}

h2 {
margin-bottom: 1rem;
font-size: 1.5rem;
font-family: "Playfair Display";
font-style: italic;
max-width: 700px;
}

p {
color: #2a2a2a;
margin-bottom: 1rem;
max-width: 700px;
}

.subhead {
font-weight: bold;
}

ul {
    margin: 1.2rem;

}

a {
    color: #cc9999;
    text-decoration: underline;
    cursor: pointer;
} 

a:visited {
    color: #cc9999;
    text-decoration: none;
    cursor: pointer;
} 

a:hover {
    color: #2a2a2a
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
} 

`

const Image = styled(Img)`
margin-top: 1rem;
margin-bottom: 2rem;
/* border-radius: 10px; */
display: cover;
height: 100%;
`

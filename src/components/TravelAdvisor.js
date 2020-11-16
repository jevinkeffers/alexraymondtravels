import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaCompass } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
// import { Button } from './Button'
import Aos from "aos"
import "aos/dist/aos.css"

const TravelAdvisor = () => {
useEffect(() => {
Aos.init({})
}, [])

const data = useStaticQuery(graphql`
query {
allFile(
filter: {
ext: { regex: "/(jpg)|(png)|(jpeg)/" }
name: { in: ["compass"] }
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
    <TopLine>
Your Travel Advisor
</TopLine>
<h1>The Benefits of Working with a Travel Advisor</h1>


{data.allFile.edges.map((image, key) => (
<Image key={key} fluid={image.node.childImageSharp.fluid} />
))}

<BlogBody>
<h2>
Peace of mind, exclusivity, insider knowledge and experience are
just a few of the reasons why a trusted travel advisor can be your
most loyal confidante. Let's talk about why traveling with a
personal advisor will make your trip a dream come true.
</h2>

<p>
    From the first spark of an idea to your excited scurry to the
    departure gate, to the moment you open your hotel suite and rush
    to the window to catch the dazzling views, a travel advisor
    collaborates with you on every detail to ensure your trip is
    seamless.
</p>
<p>
    Here are just five reasons hiring a travel advisor could be the
    best decision you ever make.
</p>
<p className="subhead">They’re well traveled</p>
<p>
    To become an expert in any craft, typically the first step is to
    become immersed in the subject matter. Fortunately, for
    advisors, our subject is the world. Advisors naturally have
    on-the-go mindsets and will seek out every opportunity to
    strengthen their expertise and increase industry knowledge, thus
    giving clients the ultimate insider access and added perks. They
    can recommend off the beaten path excursions you would never
    find in a Google search, they love to help you reserve the best
    table in town and suggest things like the best rooftop for craft
    cocktails and stunning views - guiding you not as a typical
    tourist, but a well seasoned traveler.
</p>
<p className="subhead">
    They are your go-to resource from start to finish
</p>
<p>
    Aside from saving you time researching the world and all it has
    to offer, advisors will continuously anticipate your needs,
    resolve any challenges that arise and ensure all details are
    accounted for. They consistently study travel industry best
    practices to best protect your safety, your health, your
    investment and your peace of mind.
</p>
<p className="subhead">
    They know how important all those life moments can be
</p>
<p>
At <Link to="https://www.epperlytravel.com/" target='_blank'>Epperly Travel</Link>, one of the core values is “We create fun and celebrate constantly”. Whether it’s a destination wedding, an epic honeymoon, a 40th birthday or a happy retirement, advisors know how important it is to highlight every step of the journey so it becomes a part of your story forever.
</p>
<p className="subhead">They proactively seek your feedback</p>
<p>
    As you return home, a reliable travel advisor will want to hear
    your stories! Recapping the details and keeping the relationship
    conversational rather than transactional is key to creating
    successful adventures. They will always look forward to learning
    more about you and your preferences so they can design the
    perfect itinerary for your next great discovery.
</p>
</BlogBody>
</ContentWrapper>
</BlogContainer>
</BlogPage>
)
}

export default TravelAdvisor

const BlogPage = styled.div`
background-color: #FFFFF0;
padding-left: 1rem;
padding-right: 1rem;
`

const BlogContainer = styled.div`
background-color: #FFFFF0;
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

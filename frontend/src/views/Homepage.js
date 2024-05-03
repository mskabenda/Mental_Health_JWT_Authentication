import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Mental Health Matters!</h1>
        <p>
          First and foremost, I want to commend you for your commitment to understanding your mental health. Below, I'll outline three key areas you can focus on to enhance your understanding of emotional and mental wellbeing
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a>
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
          <h2>Coping strategies</h2>
          <p>
          Learning effective coping strategies can help you manage stress, anxiety, and other challenges in life. This may involve developing healthy coping mechanisms such as deep breathing exercises, relaxation techniques, seeking support from friends or professionals, and practicing problem-solving skills.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Emotion regulation:</h2>
          <p>
          Understanding and effectively managing your emotions is essential for psychological well-being. Emotion regulation involves the ability to recognize, understand, and appropriately respond to your own emotions and the emotions of others. Techniques such as cognitive reappraisal, mindfulness meditation, and relaxation exercises can help you regulate your emotions in healthy ways, leading to greater emotional stability and resilience.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Cognitive restructuring:</h2>
          <p>
          Cognitive restructuring is a psychological technique used to challenge and modify unhelpful or irrational thoughts and beliefs. By identifying and reframing negative thought patterns, you can improve your mental health and emotional well-being. Cognitive-behavioral therapy (CBT) often utilizes cognitive restructuring as a core component to help individuals overcome issues such as anxiety, depression, and low self-esteem. Engaging in cognitive restructuring exercises and seeking guidance from a qualified therapist can facilitate positive changes in your cognitive processes and overall psychological functioning.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Company 2023-2024</p>
  </footer>
</>

    </div>
  )
}

export default Homepage
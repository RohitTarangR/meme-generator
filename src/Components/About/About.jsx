import React from "react";

const About = () => {
  return (
    <>
      <div className="px-10">
        <div className="max-w-2xl mx-auto my-10  text-justify">
          <h1 className="text-3xl font-semibold mb-5 text-center">About Us</h1>
          <p className="text-lg mb-5">
            Welcome to our meme gallery app! This app is designed to provide you
            with a daily dose of laughter and entertainment through a curated
            collection of memes sourced from various corners of the internet.
          </p>
          <p className="text-lg mb-5">
            Our team of meme enthusiasts tirelessly scours the web to handpick
            the funniest and most relatable memes for your enjoyment. Whether
            you're looking for a quick chuckle or a meme to share with friends,
            we've got you covered.
          </p>
          <p className="text-lg mb-5">
            In addition to browsing memes, you can also interact with our
            community by liking your favorite memes and leaving comments to
            share your thoughts or funny anecdotes related to the memes.
          </p>
          <p className="text-lg">
            We're committed to providing you with a seamless and enjoyable
            experience on our platform. If you have any feedback or suggestions,
            feel free to reach out to us. Thank you for choosing our app for
            your daily dose of meme goodness!
          </p>
        </div>
        <div>
          <div className="max-w-2xl mx-auto my-10 text-justify">
            <h1 className="text-3xl font-semibold mb-5 text-center">
              Content Guidelines
            </h1>
            <h2 className="text-xl font-semibold mb-3">Types of Memes</h2>
            <p className="text-lg mb-5">
              Our meme gallery features a wide range of meme categories to cater
              to different tastes and preferences. From classic reaction memes
              to trending formats, you'll find a diverse selection to explore
              and enjoy.
            </p>
            <h2 className="text-xl font-semibold mb-3">
              User-Generated Content
            </h2>
            <p className="text-lg mb-5">
              We encourage users to share their own memes and contribute to our
              community. However, we have guidelines in place to ensure a
              positive and enjoyable experience for all users. Please refrain
              from posting offensive or inappropriate content. Any content
              violating our community guidelines will be promptly removed.
            </p>
            <h2 className="text-3xl font-semibold mb-5 text-center">FAQs</h2>
            <div className="mb-5 text-justify">
              <h3 className="text-lg font-semibold mb-2">
                How often are new memes added?
              </h3>
              <p className="text-lg">
                We update our meme gallery regularly to keep the content fresh
                and exciting. New memes are added multiple times a day, so be
                sure to check back often for the latest laughs.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-2">
                Can I download memes?
              </h3>
              <p className="text-lg">
                Yes, you can download memes directly from our app to share with
                friends or save for later enjoyment. Simply click on the meme
                you want to download and follow the prompts to save it to your
                device.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How can I report inappropriate content?
              </h3>
              <p className="text-lg">
                If you come across any content that violates our guidelines or
                is otherwise offensive, please use the report feature available
                on each meme card. Our moderation team will review reports
                promptly and take appropriate action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

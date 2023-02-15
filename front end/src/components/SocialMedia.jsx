import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const git = "https://github.com/sahilbansal123-lang";
const linkedIn = "https://www.linkedin.com/in/sahil-bansal-087778185/";
const twitter = "https://twitter.com/its_sahil95"

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter onClick={() => window.open(twitter)}/>
    </div>
    <div>
      <FaLinkedinIn onClick={() => window.open(linkedIn)} />
    </div>
    <div>
      <BsGithub onClick={() => window.open(git)}/>
    </div>
  </div>
);

export default SocialMedia;
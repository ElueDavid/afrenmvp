import React from 'react'
import "../Styles/incall-system.css"


export default function InCallSystem() {
  return (
    <div class="vr-major-container">
    <div class="virtual-workspace-nav">
        <div class="vwn-images">
            <figure class="vwn-back-btn">
                <img src="afren-images/blue-arrow-left.png" alt=""/>
            </figure>
            <img src="afren-images/afren-logo.png" alt=""/>
        </div>
        <div class="vwn-links">
            <img src="afren-images/link.png" class="vwn-dropdown-btn" alt=""/>
            <div class="vwn-drop-down">
                <span>
                    <img src="afren-images/link.png" alt=""/>
                    <a href="#">cem-jnmt-hsu</a>
                </span>
                <span>
                    <a href="#">Add Participant</a>
                    <img src="afren-images/user-add.png" alt=""/>
                </span>
            </div>
        </div>
    </div>
    <div class="virtual-workspace">
        <section class="virtual-meeting-area">
            <div class="main-screen-viewport">
                <span class="screen-resizer">
                    <img src="afren-images/maximize-2.png" alt=""/>
                </span>
                <div class="virtual-call-info">
                    <span class="screen-name">
                        Jacob Jones
                    </span>
                    <div class="voice-movement">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="participants">
                <section>
                    <figure class="video-toggle-btn">
                        <img src="afren-images/video-icon.png" alt=""/>
                    </figure>
                    <div class="participant-opt">
                        <p class="participant-name">
                            Jacob Jones
                        </p>
                        <figure class="participant-mic-toggle">
                            <img src="afren-images/microphone-2.png" alt=""/>
                        </figure>
                    </div>
                </section>
                <section>
                    <figure class="video-toggle-btn">
                        <img src="afren-images/video-icon.png" alt=""/>
                    </figure>
                    <figure class="participant-main-image">
                        <img src="afren-images/Briana_Square_Web.jpg.png" alt=""/>
                    </figure>
                    <div class="participant-opt">
                        <p class="participant-name">
                            Jacob Jones
                        </p>
                        <figure class="participant-mic-toggle">
                            <img src="afren-images/microphone-2.png" alt=""/>
                        </figure>
                    </div>
                </section>
            </div>
            <div class="call-options">
                <div class="call-function-btns">
                    <span>
                        <img src="afren-images/microphone-2.png" alt=""/>
                    </span>
                    <span>
                        <img src="afren-images/video-icon.png" alt=""/>
                    </span>
                    <span>
                        <img src="afren-images/send-square.png" alt=""/>
                    </span>
                    <span>
                        <img src="afren-images/blue-horizontal-ellipsis.png" alt=""/>
                    </span>
                </div>
                <div class="incall-end-btn">
                    <img src="afren-images/incoming-call.png" class="ieb-image" alt=""/>
                    <p>
                        End Call
                    </p>
                </div>
            </div>
        </section>
        <section class="virtual-message-area">
            <h2 class="vma-subheading">
                Chats
            </h2>
            <div class="vma-chat-space">
                <section class="vcs-recipient">
                    <div class="vcs-recipient-info">
                        <figure>
                            <img src="afren-images/female-2.png" alt=""/>
                        </figure>
                        <p class="vcs-recipient-name">
                            Alexander Williams
                        </p>
                        <time>
                            9:00pm
                        </time>
                    </div>
                    <p class="vcs-recipient-message">
                        Hi Rosemary,
                    </p>
                </section>
                <section class="vcs-recipient">
                    <div class="vcs-recipient-info">
                        <figure>
                            <img src="afren-images/female-2.png" alt=""/>
                        </figure>
                        <p class="vcs-recipient-name">
                            Alexander Williams
                        </p>
                        <time>
                            9:00pm
                        </time>
                    </div>
                    <p class="vcs-recipient-message">
                        Hi Rosemary,
                    </p>
                </section>
                <section class="vcs-replyer">
                    <div class="vcs-replyer-info">
                        <time>
                            9:00pm
                        </time>
                        <p class="vcs-replyer-name">
                            Alexander Williams
                        </p>
                        <figure>
                            <img src="afren-images/female-2.png" alt=""/>
                        </figure>
                    </div>
                    <p class="vcs-replyer-message">
                        Hi Rosemary,hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                    </p>
                </section>
                <section class="vcs-replyer">
                    <div class="vcs-replyer-info">
                        <time>
                            9:00pm
                        </time>
                        <p class="vcs-replyer-name">
                            Alexander Williams
                        </p>
                        <figure>
                            <img src="afren-images/female-2.png" alt=""/>
                        </figure>
                    </div>
                    <p class="vcs-replyer-message">
                        Hi Rosemary,Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque qui nulla consequatur porro iste ipsam nisi rem explicabo tenetur, at ex. Eligendi consectetur, neque cum rerum nisi expedita sit.
                    </p>
                </section>
            </div>
            <div class="vma-send-space">
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter message.."></textarea>
                <span class="vma-send-btn">
                    <img src="afren-images/blue-send-plane.png" alt=""/>
                </span>
            </div>
        </section>
    </div>
</div>
  )
}

---
title: "College of Engineering Control Systems Laboratory"
description: "Developing and maintaining hands-on robotics and control laboratories through embedded systems, system integration, and instructional platform design."
category: "Lab Development" # Options: "Low-Level Control", "RL Algorithm", "Perception"
technologies: ["ROS/ROS2", "System Integration","Embedded System", "Real-Time Systems", "Mapping & Localization", "Control systems"]
image: "/projects/coecsl.png"
order: 1
# Optional: Single GitHub repo
# github: "https://github.com/username/repo"

# Optional: Multiple GitHub repos
# github:
#   - title: "Algorithm"
#     url: "https://github.com/username/repo1"
#     description: "Implementation of the algorithm"
#   - title: "Deployment"
#     url: "https://github.com/username/repo2"
#     description: "Deployment code"

# Optional: Video link
# video: "https://drive.google.com/file/d/1Xz49y2tI6ynNnQ8TG-kUl6flLDSIyuWI/view"

# Optional: Website link
# website: "https://project-website.com"

# Optional: Custom links
links:
  - title: "Website"
    url: "https://coecsl.ece.illinois.edu/"
    description: "COECSL website"

# Optional: Additional images for gallery
# images:
#   - "/projects/screenshot1.jpg"
#   - "/projects/screenshot2.jpg"
---

## Overview
I have served as a Lab Developer in the College of Engineering’s Control Systems Laboratory under the supervision of Dan Block since the summer of 2021. In this role, I support roughly ten control-related courses by developing and maintaining the hardware and software platforms used in instructional labs.

My work spans embedded programming, sensor integration, communication between microcontrollers and higher-level computers, and the design of data-acquisition hardware. In parallel, I support weekly lab operations by working with teaching assistants to troubleshoot system issues and help students debug hardware and software problems during lab sessions.

<figure>
  <img src="/projects/gem.jpg" alt="gem.jpg" />
  <figcaption style="text-align: center;">
    GEM e2 vehicle platform
  </figcaption>
</figure>

## UR3 Robot Arm – ROS2 Migration
The Intro to Robotics course relies on a UR3 industrial robot arm for hands-on laboratory exercises in motion planning and control. The robot was originally controlled using a custom driver built on an older version of ROS (Robot Operating System), a widely used software framework for robotics. As the robotics ecosystem has moved toward ROS2, continuing to rely on the older driver would make long-term maintenance and future updates increasingly difficult.

My role was to migrate the UR3 control software to the official ROS2 driver while preserving the original lab behavior and learning objectives. This ensured that students could continue using the same experiments and workflows while benefiting from a supported and modern software platform.
<figure>
  <img src="/projects/ur3.png" alt="ur3.png" />
  <figcaption style="text-align: center;">
    UR3 robot arm used in Intro to Robotics laboratory exercises
  </figcaption>
</figure>

## Data Acquisition (DAQ) Board Development
Several instructional labs relied on a PCI-based data-acquisition card to connect desktop computers to physical experiments, and this setup had been used successfully for many years. As newer computers dropped support for this hardware, the existing labs could no longer run on modern systems.

To address this problem, I worked on developing a new data-acquisition platform based on a TI microcontroller that could provide the same capabilities using supported hardware and software tools.

<figure>
  <img src="/projects/daq.png" alt="daq.png" />
  <figcaption style="text-align: center;">
    Redesigned TI-based data acquisition board
  </figcaption>
</figure>



## Mechatronics Robot Car Platform Development
In the Mechatronics course, students learn how to write embedded firmware and use communication protocols to connect sensors, processors, and actuators in a robotic system. The robot car used in the course was originally built around an older processor platform that combined a microcontroller and embedded Linux. As this hardware became outdated, it limited the ability to update the labs and introduce modern development tools.

To address this, the robot car platform was upgraded to a new architecture based on a TI F28379D microcontroller and a Raspberry Pi. I carried out the technical work required for this transition, redesigning the system architecture and rebuilding the software interfaces. This update modernized the platform and created a clearer separation between low-level real-time firmware and higher-level processing.
<figure>
  <img src="/projects/mech.png" alt="mech.png" />
  <figcaption style="text-align: center;">
    Robot car platform used in the Mechatronics course
  </figcaption>
</figure>

## Lab Support Work
In addition to development work, I also support several hands-on laboratory courses by helping students and TAs debug both hardware and software issues. I have assisted labs in Mechatronics, Computer Control of Mechanical Systems, and Robot Dynamics and Control, working with platforms such as a Segway-style balancing robot, the Mechatronics class robot car, and the CRS Catalyst 3 robot arm. This includes troubleshooting sensor and actuator failures, resolving communication and timing issues, and helping TAs diagnose and recover from system outages during lab sessions. Through this work, I gained extensive experience maintaining and debugging embedded robotic systems and ensuring that the platforms operated reliably throughout the semester.
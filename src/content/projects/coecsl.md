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
I have served as a Lab Developer in the College of Engineering’s Control Systems Laboratory since the summer of 2021, working under the supervision of Dan Block. In this role, I help develop, modernize, and maintain the hardware and software platforms that support approximately ten control- and robotics-focused courses.

My work spans embedded systems development, sensor integration, real-time communication, and instructional platform design. In parallel, I support weekly lab operations by working directly with teaching assistants and students to troubleshoot hardware and software issues during lab sessions. This role requires both long-term system design and hands-on debugging to ensure that instructional platforms remain reliable and usable throughout the semester.


## UR3 Robot Arm – ROS2 Migration
The Intro to Robotics course relies on a UR3 industrial robot arm for hands-on laboratory exercises in motion planning and control. The robot was originally controlled using a custom driver built on an older version of ROS (Robot Operating System), a widely used software framework for robotics. As the robotics ecosystem has moved toward ROS2, continuing to rely on the older driver would make long-term maintenance and future updates increasingly difficult.

My role was to migrate the UR3 control software to the official ROS2 driver while preserving the original lab behavior and learning objectives. This ensured that students could continue using the same experiments and workflows while benefiting from a supported and modern software platform.
<figure>
  <img src="/projects/ur3.png" alt="ur3.png" />
  <figcaption style="text-align: center;">
    UR3 robot arm used in Intro to Robotics laboratory exercises
  </figcaption>
</figure>

### Technical Contributions
I updated the course starter code to ensure that the UR3 behaved identically under ROS2. This included:
- Converting existing joint-space pick-and-place examples
- Verifying compatibility with the course’s vision-based control exercises
- Restructuring node interfaces to match the ROS2 driver’s message and service definitions

I tested each lab module to confirm that the robot could execute trajectories, respond to high-level commands, and integrate with the perception pipeline exactly as before.

## Data Acquisition (DAQ) Board Development
Several instructional labs relied on a PCI-based data acquisition card to connect desktop computers to physical experiments, and this setup had been used successfully for many years. As newer computers dropped support for this hardware, the existing labs could no longer run on modern systems.

To address this problem, I worked on developing a new data acquisition platform based on a TI microcontroller that could provide the same capabilities using supported hardware and software tools.

<figure>
  <img src="/projects/daq.png" alt="daq.png" />
  <figcaption style="text-align: center;">
    Redesigned TI-based data acquisition board
  </figcaption>
</figure>

### Technical Contributions
I helped design a breakout PCB for the TI F28379D that exposed the interfaces required for instructional labs, including:
- Two DAC channels
- Two ADC channels
- Two encoder inputs
- Multiple PWM outputs

These interfaces allow the board to collect real-time data and communicate with a desktop computer over a serial connection. The DAQ board is now used as the primary interface between software environments and physical experiment setups across multiple control and signal-processing courses, including *Dynamics of Mechanical Systems*, *Signal Processing*, *Industrial Control Systems*, and *Control Systems*.

In some labs, students use Simulink Desktop Real-Time to command actuators and visualize sensor data in MATLAB. In others, they program the board directly using C2000Ware to implement closed-loop control on the microcontroller. This new DAQ system restores the functionality of the legacy PCI hardware while using modern, supported platforms.


## Mechatronics Robot Car Platform Development
In the Mechatronics course, students learn how to write embedded firmware and use communication protocols to connect sensors, processors, and actuators in a robotic system. The robot car used in the course was originally built around an older processor platform that combined a microcontroller and embedded Linux. As this hardware became outdated, it limited the ability to update the labs and introduce modern development tools.

To address this, the robot car platform was upgraded to a new architecture based on a TI F28379D microcontroller and a Raspberry Pi. I carried out the technical work required for this transition, redesigning the system architecture and rebuilding the software interfaces. This update modernized the platform and created a clearer separation between low-level real-time firmware and higher-level processing.
<figure>
  <img src="/projects/mech.png" alt="mech.png" />
  <figcaption style="text-align: center;">
    Robot car platform used in the Mechatronics course
  </figcaption>
</figure>

### Technical Contributions
The robot car platform upgrades I worked on include:
- Integrated an OpenMV camera for visual sensing
- Added a Raspberry Pi to handle higher-level processing tasks
- Enabled AprilTag-based localization and LiDAR mapping
- Developed starter code for serial communication between the TI F28379D and Raspberry Pi, writing both the embedded C firmware and the Python interface
- Developed a Python-based GUI for tuning robot parameters and visualizing the robot’s estimated position

## Lab Support Work
In addition to development work, I also support several hands-on laboratory courses by helping students and TAs debug both hardware and software issues. I have assisted labs in Mechatronics, Computer Control of Mechanical Systems, and Robot Dynamics and Control, working with platforms such as a Segway-style balancing robot, the Mechatronics class robot car, and the CRS Catalyst 3 robot arm. This includes troubleshooting sensor and actuator failures, resolving communication and timing issues, and helping TAs diagnose and recover from system outages during lab sessions. Through this work, I gained extensive experience maintaining and debugging embedded robotic systems and ensuring that the platforms operated reliably throughout the semester.
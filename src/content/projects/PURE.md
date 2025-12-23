---
title: "PURE (Personalized Unique Rolling Experience)"
description: "A self-balancing, ball-based wheelchair designed to enable hands-free, omnidirectional mobility in tight indoor environments."
category: "Research Project" # Options: "Low-Level Control", "RL Algorithm", "Perception"
technologies: ["Dynamics Modeling","Robot Simulation","Real-Time Model-Based Control", "Embedded System", "Quadratic Programming"]
image: "/projects/pure.png"
order: -1

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
# video: "https://wheretolearn.github.io/static/videos/apg_aug_explore_video.mp4"

# Optional: Website link
# website: "https://project-website.com"

# Optional: Custom links
links:
  - title: "Enhancing Stability via Adaptive Torque Control for a Four-Wheeled Omniwheel Ballbot"
    url: "https://ieeexplore.ieee.org/document/11164137"
    description: "Published in: 2025 IEEE 21st International Conference on Automation Science and Engineering (CASE)"

# Optional: Additional images for gallery
# images:
#   - "/projects/screenshot1.jpg"
#   - "/projects/screenshot2.jpg"
---

## Overview

PURE (Personalized Unique Rolling Experience) is a self-balancing, ball-based wheelchair designed to improve mobility in indoor environments while reducing physical strain on users. Traditional wheelchairs rely on fixed wheels and manual propulsion, which limits maneuverability and can lead to long-term shoulder injuries. PURE instead balances on a single spherical wheel and enables smooth, hands-free motion in any direction using the rider’s torso movement.
<div style="text-align: center;">
    <video width="80%" controls>
        <source src="/projects/PURE_demo.mov" type="video/mp4">
        -
    </video>
    <p>PURE balancing demo</p>
</div>

## System Design

The current platform, PURE Gen3, uses four motor-driven omniwheels to actuate a single spherical wheel. Omniwheels are wheels with small rollers around their circumference, allowing motion both forward and sideways. Using four wheels distributes the load across multiple contact points, improving traction and enabling the system to support heavier riders while maintaining stability during aggressive maneuvers like a sudden brake.

<figure>
  <img src="/projects/four-omniwheels.jpg" alt="four-omniwheels.jpg" />
  <figcaption style="text-align: center;">
    Suspension-like module for normal force measurement
  </figcaption>
</figure>

## Sensing & Electronics
PURE relies on an inertial measurement unit (IMU), four load cells, and four motor encoders to maintain balance and estimate traction. The IMU measures the robot’s tilt angle and angular velocity, while the load cells measure the normal force between each omniwheel and the ball. Computation is split between a real-time microcontroller running the balancing controller at 1 kHz and a Raspberry Pi that computes motor torque distribution at the same rate.

<figure>
  <img src="/projects/load-cell-structure.png" alt="load cell structure" />
  <figcaption style="text-align: center;">
    Suspension-like module for normal force measurement
  </figcaption>
</figure>

## Control Architecture
The control system consists of two layers. The first layer computes the desired global torques required to balance and move the robot based on tilt, velocity, and user input. Pitch and roll are regulated using a linear–quadratic regulator(LQR) with integral on the robot speed, while yaw is controlled using a proportional–derivative(PD) controller.
The second layer distributes these global torques across the four motors. Because multiple torque distributions can produce the same motion, the controller must carefully allocate effort to avoid wheel slip and maintain reliable traction during fast acceleration, braking, and direction changes.

<figure>
  <img src="/projects/control-diagram.png" alt="block diagram" />
  <figcaption style="text-align: center;">
    Block diagram of two layers of the control architecture
  </figcaption>
</figure>

## Simulation & Validation
To tune the controller and study system behavior, a physics-based simulation of PURE Gen3 was developed in MuJoCo. The simulation allowed safe exploration of controller gains and visualization of system response to disturbances before deployment on hardware. Insights from simulation directly informed the design and tuning of the real-world controller, improving stability and responsiveness under challenging operating conditions.
<figure>
  <img src="/projects/mujoco-simulation.png" alt="mujoco-simulation" />
  <figcaption style="text-align: center;">
    Mujoco simulation of PURE Gen3
  </figcaption>
</figure>
---
title: "PURE (Personalized Unique Rolling Experience)"
description: "Designed and implemented real-time control systems for a self-balancing, ball-based wheelchair, enabling stable omnidirectional motion through optimization-based torque distribution and sensor-driven control."
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

PURE (Personalized Unique Rolling Experience) is a self-balancing, ball-based wheelchair designed to enable hands-free, omnidirectional mobility in tight indoor environments while reducing physical strain on users. Conventional wheelchairs rely on fixed wheels and manual propulsion, which limits maneuverability and can lead to long-term shoulder and arm overuse injuries.

PURE instead balances on a single ball and responds directly to rider torso motion, enabling intuitive control without hand-operated inputs. This design allows smooth motion in any direction, a compact footprint, and improved maneuverability in confined spaces such as homes, clinics, and elevators.

My work on PURE focuses on designing and implementing the real-time control system that makes this inherently unstable platform balance safely and respond predictably under a human rider.
<div style="text-align: center;">
    <video width="80%" controls>
        <source src="/projects/PURE_demo.mov" type="video/mp4">
        -
    </video>
    <p>PURE balancing demo</p>
</div>

## System Architecture and My Work

The current platform, PURE Gen3, uses four motor-driven omniwheels to actuate a single spherical wheel. Omniwheels are wheels with small rollers around their circumference, allowing motion both forward and sideways. Using four wheels distributes the load across multiple contact points, improving traction and enabling the system to support heavier riders while maintaining stability during aggressive maneuvers like a sudden brake.
However, adding a fourth motor also introduces a control challenge. The balancing and motion controller computes three global torques—pitch, roll, and yaw—that are required to stabilize and move the robot. With four motors acting on a single ball, the mapping from desired global torque to individual motor torques becomes underdetermined, meaning that infinitely many motor-torque combinations can produce the same overall motion. This underdetermined structure provides flexibility in how torque is assigned across the wheels. By carefully selecting a torque distribution strategy, the controller can reduce wheel slip by respecting traction limits at each wheel–ball contact, which directly motivates the torque distribution strategies developed in my research.
<figure>
  <img src="/projects/four-omniwheels.jpg" alt="four-omniwheels.jpg" />
  <figcaption style="text-align: center;">
    Upside-down view of PURE Gen3 illustrating how motor-driven wheels contact and drive the ball, enabling balance and motion in any direction.
  </figcaption>
</figure>

My main contribution:
- Designed the balancing and motion control architecture
- Developed real-time torque distribution strategies
- Integratedsensing, computation, and communication across embedded and Linux systems
- Validated controllers in simulation and on physical hardware

## Hardware and Sensing Integration
PURE Gen3 is built around a 9-inch ball driven by four motorized omniwheels. Each suspension-like wheel module includes:
- A motor and 125 mm omniwheel
- A load cell measuring normal force at the wheel-ball contact

<figure>
  <img src="/projects/load-cell-structure.png" alt="load cell structure" />
  <figcaption style="text-align: center;">
    Suspension-like module for normal force measurement
  </figcaption>
</figure>

To support balance and traction estimation, the system uses:
- A 1 kHz IMU mounted in the robot chasis to measure roll, pitch, and yaw
- Four load cells measuring normal forces at the wheel-ball contact
- Motor encoders providing wheel speed and position feedback

I implemented the full sensing and communication pipeline to support a 1 kHz control loop:
- State Estimation: Acquired tilt and angular rate measurements from the IMU (SPI) and wheel speed/position measurements from motor encoders (CAN bus).
- Traction Sensing: Integrated four load cells to measure real-time normal forces (SPI) at the wheel-ball contact, critical for slip prevention.
- Computation: Distributed computation between a TI F28379D microcontroller, which executes the balancing controller, and a Raspberry Pi 4, which computes torque distribution. 
- Actuation: Sent motor torque commands over the CAN bus to drive the omniwheel motors.
- Data collection: TI F28379D microcontroller sending data through UART to Raspberry pi 4. 


## Control System Design - Two-layer Control Architecture
<figure>
  <img src="/projects/control-diagram.png" alt="block diagram" />
  <figcaption style="text-align: center;">
    Block diagram of two layers of the control architecture
  </figcaption>
</figure>

### Layer 1: Balancing and Motion control
The first layer computes the desired global torques (roll, pitch, yaw) required to keep the robot upright and follow user intent.
- Roll and pitch are modeled as wheel-inverted-pendulum systems
- Controlled using LQR with integral action for disturbance rejection and velocity tracking
- Yaw regulated by a PD controller for heading control
To tune and validate this controller, I built a MuJoCo simulation of PURE, enabling systematic exploration of controller gains and disturbance responses before deployment to hardware.

<figure>
  <img src="/projects/mujoco-simulation.png" alt="mujoco-simulation" />
  <figcaption style="text-align: center;">
    Mujoco simulation of PURE Gen3
  </figcaption>
</figure>

### Layer 2: Torque Distribution (My Research Focus)
The second layer maps the desired global torques to individual motor torques. Because four motors actuate a single ball while only three global torque directions are required, there are infinitely many torque solutions. Selecting an appropriate solution is critical for maintaining traction and avoiding slip, especially during aggressive maneuvers.

#### Method 1: Normal Force-Based Torque Saturation
This strategy uses load-cell feedback to limit each wheel’s torque based on its measured normal force. Since traction limits scale with normal force, this method prevents wheels from exceeding their friction limits during operation. While this method effectively reduced slippage during acceleration and braking, it introduced undesired lateral drift due to uneven saturation. 
This work was published at IEEE CASE 2025.

#### Method 2: Optimization-Based Torque Distribution (QP)
To address asymmetries introduced by torque saturation, I developed a quadratic-programming (QP)-based torque distribution layer.
At each control cycle, the QP minimizes deviation from the desired global torque while enforcing traction limits derived from load-cell measurements to maintain directional consistency to prevent unintended drift.
The QP runs in real time on the Raspberry Pi at 1 kHz, enabling stable and predictable motion during aggressive maneuvers.


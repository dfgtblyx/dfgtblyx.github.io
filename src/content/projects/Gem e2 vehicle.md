---
title: "Autonomous Navigation and Parking"
description: "Principles of Safe Autonomy course project where we programmed a small electric vehicle follows lanes, builds a map of its environment, and parks itself at a user-selected location."
category: "Course Project" # Options: "Low-Level Control", "RL Algorithm", "Perception"
technologies: ["ROS", "Autonomous vehicle","System integration", "Laboratory Platform Development", "Control systems"]
image: "/projects/gem-title.png"
order: 2
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

Optional: Video link
video: "https://drive.google.com/file/d/1Xz49y2tI6ynNnQ8TG-kUl6flLDSIyuWI/view"

# Optional: Website link
# website: "https://project-website.com"

# Optional: Custom links
# links:
#   - title: "Paper"
#     url: "https://arxiv.org/..."
#     description: "Published in Conference 2024"

# Optional: Additional images for gallery
# images:
#   - "/projects/screenshot1.jpg"
#   - "/projects/screenshot2.jpg"
---

## Overview

As part of the Principles of Safe Autonomy course, this project explores how perception, mapping, and planning can be integrated on a real electric vehicle, the GEM e2, to enable autonomous navigation and parking. While these components are often studied separately, combining them into a single working system requires careful coordination between sensing, navigation, and control.

The vehicle uses cameras to detect lane boundaries and additional sensors to estimate its position and build a map of its surroundings. A simple click-to-goal interface allows a user to select a parking location on a map. Once a goal is chosen, the vehicle drives to that location and automatically completes a parallel or diagonal parking maneuver.

My work focused on the navigation and parking components. I developed the software that connects a user-selected parking goal to the vehicle’s motion and designed and tested the parking maneuvers in both simulation and on the real vehicle.
<figure>
  <img src="/projects/gem.jpg" alt="gem.jpg" />
  <figcaption style="text-align: center;">
    GEM e2 vehicle platform
  </figcaption>
</figure>

## Technical Details
The project was implemented on a GEM e2 electric vehicle using ROS, a widely used software framework for robotic systems. The system combines lane following, mapping, and goal-directed navigation to support autonomous driving behaviors.

For lane following, the vehicle processes images from a stereo camera using a YOLOPv2 lane detection model. The detected lane center is converted into waypoints, which are a sequence of target positions along the road. A PID controller tracks these waypoints and keeps the vehicle centered in the lane by correcting position and heading errors.

For mapping and localization, a LiDAR–IMU fusion algorithm [(FAST-LIO)](https://github.com/hku-mars/FAST_LIO) combines three-dimensional LiDAR data with inertial measurements to estimate the vehicle’s position and build a map of the environment as it drives.
<figure>
  <img src="/projects/fastlio.png" alt="fastlio.png" />
  <figcaption style="text-align: center;">
   Real-time map of the environment built while the vehicle follows the lane
  </figcaption>
</figure>


After completing a loop around the course, the system switches from lane following to goal-directed navigation. RViz, a visualization tool for interacting with robotic systems, provides the interface for selecting a parking target. When the user clicks a desired parking position and orientation, the vehicle leaves lane-following mode, navigates to the goal, and executes the selected parking maneuver.
<figure>
  <img src="/projects/parking.png" alt="parking.png" />
  <figcaption style="text-align: center;">
   User selecting a parking location on the map
  </figcaption>
</figure>

My work centered on bridging the user-selected goal to real vehicle motion. I built a software module that receives the goal pose, compares it with the vehicle’s estimated position, and generates a staged approach toward the target. This logic reduces position and orientation error, selects forward or reverse motion when appropriate, and transitions to a final alignment phase before parking. To execute these actions on hardware, I developed a software bridge that converts desired steering angles and target speeds into low-level vehicle commands. These commands are sent to the PACMod drive-by-wire system, which provides electronic control of throttle, braking, steering, and gear selection. I also evaluated and refined the parking behaviors in simulation using Gazebo before deploying them on the real vehicle.

<figure>
  <img src="/projects/simulation.png" alt="simulation.png" />
  <figcaption style="text-align: center;">
   Gazebo simulation of a diagonal parking maneuver
  </figcaption>
</figure>

## Summary

Overall, my work connected perception and mapping to motion execution. The navigation bridge allowed the vehicle to interpret user-selected parking goals, and the parking logic enabled reliable execution of the final maneuver on the physical platform.

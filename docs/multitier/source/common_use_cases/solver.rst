.. _users_solver:

Simulation tool developer: Solver
=================================
The code generation functionality in libCellML can be used to transform CellML models into procedural code for simulation.
This example works through that process. 

.. container:: directorylist

  **C++ resources**:

  - pretend download
  - another pretend download
  - resources

  **Python resources**:

  - fake download
  - resources
      
    - another download


Create a placeholder for the solver
-----------------------------------
Interacting with procedural code means that we need a program, so the first step is to create what will soon become our solver.
To start with, the program only reads and interprets command line arguments; the size and number of timesteps to simulate.
This is done using a simple function, as below.

We should probably check out :ref:`common use cases <common_users>`

Merging a pull request
======================

.. note::

  Caution: before merging a pull request make sure that a release is not currently in progress.
  If a release is in progress, the prime repository will have a branch called *release_staging_<version number>* (where <version number> is a semantic version number).

When merging a pull request, the reviewer should add a comment so that the corresponding issue is closed.
This can be done by adding a directive to the merge commit, like so::

  closes #123

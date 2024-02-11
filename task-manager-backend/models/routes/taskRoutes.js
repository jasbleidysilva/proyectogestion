const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // Importar el modelo Project

// Ruta para obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo proyecto
router.post('/', async (req, res) => {
  const project = new Project({
    name: req.body.name // Utilizar req.body.name en lugar de req.body.project
  });
  try {
    const newProject = await project.save();
    res.status(201).json({ message: 'Project added successfully', project: newProject });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;



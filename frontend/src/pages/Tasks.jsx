// src/pages/Tasks.jsx
import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Loading } from "../components/Loading";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState();

  const {
    title,
    description,
    is_completed,
    handleChange,
    handleReset,
    setFormState,
  } = useForm({
    title: "",
    description: "",
    is_completed: false,
  });

  const getTasks = async () => {
    try {
      setLoading(true);

      const resp = await fetch("http://localhost:3000/api/tasks-by-user", {
        method: "GET",
        credentials: "include",
      });

      if (!resp.ok) {
        throw new Error("Error obteniendo tareas");
      }

      const data = await resp.json();
      setTasks(data.tasks);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
      alert("No se pudieron cargar las tareas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);

      const resp = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title, description, is_completed }),
      });

      if (!resp.ok) throw new Error("Error al crear tarea");

      alert("Tarea creada con éxito");
      handleReset();
      getTasks();
    } catch (error) {
      console.error(error);
      alert("Hubo un error al crear la tarea");
    } finally {
      setLoading(false);
    }
  };

  const loadTaskToEdit = (task) => {
    setEditingTask(task.id);

    setFormState({
      title: task.title,
      description: task.description,
      is_completed: task.is_completed,
    });
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const resp = await fetch(
        `http://localhost:3000/api/tasks/${editingTask}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ title, description, is_completed }),
        }
      );

      if (!resp.ok) throw new Error("Error al editar tarea");

      alert("Tarea actualizada correctamente");
      setEditingTask(null);
      handleReset();
      getTasks();
    } catch (error) {
      console.error(error);
      alert("Hubo un error al editar la tarea");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm("¿Deseas eliminar esta tarea?");
    if (!confirmDelete) return;

    try {
      setLoading(true);

      const resp = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!resp.ok) throw new Error("Error al eliminar tarea");

      alert("Tarea eliminada");
      getTasks();
    } catch (error) {
      console.error(error);
      alert("Error eliminando tarea");
    } finally {
      setLoading(false);
    }
  };

  const toggleCompleted = async (task) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          ...task,
          is_completed: !task.is_completed,
        }),
      });

      if (!resp.ok) throw new Error("No se pudo actualizar");

      getTasks();
    } catch (e) {
      alert("Error actualizando tarea");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Gestión de Tareas</h1>

      <form
        onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
        className="p-4 rounded shadow mb-5"
        style={{ backgroundColor: "#FFB5CD", color: "white" }}
      >
        <h3 className="mb-3">
          {editingTask ? "Editar Tarea" : "Crear Nueva Tarea"}
        </h3>

        <div className="mb-3">
          <input
            name="title"
            type="text"
            placeholder="Título"
            value={title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            name="description"
            placeholder="Descripción"
            value={description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-check mb-3">
          <input
            name="is_completed"
            type="checkbox"
            checked={is_completed}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                is_completed: e.target.checked,
              }))
            }
            className="form-check-input"
          />
          <label className="form-check-label">Completada</label>
        </div>

        <button className="btn btn-light w-100" type="submit">
          {editingTask ? "Guardar Cambios" : "Crear Tarea"}
        </button>
      </form>

      <h3 className="mb-3">Mis Tareas</h3>

      {tasks.length === 0 ? (
        <p>No tenés tareas todavía.</p>
      ) : (
        <div className="row">
          {tasks.map((task) => (
            <div className="col-md-4 mb-3" key={task.id}>
              <div
                className="card shadow p-3"
                style={{
                  textDecoration: task.is_completed ? "line-through" : "none",
                  backgroundColor: task.is_completed ? "#d4edda" : "white",
                }}
              >
                <h5>{task.title}</h5>
                <p>{task.description}</p>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => loadTaskToEdit(task)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Eliminar
                  </button>

                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => toggleCompleted(task)}
                  >
                    {task.is_completed ? "Desmarcar" : "Completar"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

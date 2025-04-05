
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function PlaneadorClase() {
  const [formulario, setFormulario] = useState({
    docente: "",
    grado: "",
    asignatura: "Ciencias Sociales",
    tema: "",
    competencia: "",
    enfoque: "Pensamiento crítico",
    fase: "Comprensión",
  });

  const [planeacion, setPlaneacion] = useState("");

  const actividades = {
    "Comprensión": "Lluvia de ideas o preguntas generadoras",
    "Acceso a la información": "Análisis de fuentes históricas o mapas",
    "Conceptualización": "Línea de tiempo o esquemas colaborativos",
    "Transferencia": "Debate, simulación o creación de un podcast"
  };

  const generarPlaneacion = () => {
    const actividad = actividades[formulario.fase] || "Actividad no definida";
    const descripcion = `Planeación para grado ${formulario.grado} en ${formulario.asignatura} sobre "${formulario.tema}". Enfoque: ${formulario.enfoque}. Se abordará la fase "${formulario.fase}" con la actividad: ${actividad}.`;
    setPlaneacion(descripcion);
  };

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card className="mb-4">
        <CardContent className="space-y-2">
          <Input placeholder="Nombre del docente" name="docente" onChange={handleChange} />
          <Input placeholder="Grado" name="grado" onChange={handleChange} />
          <Input placeholder="Tema" name="tema" onChange={handleChange} />
          <Textarea placeholder="Competencia" name="competencia" onChange={handleChange} />
          <select name="fase" className="w-full border p-2 rounded" onChange={handleChange}>
            <option value="Comprensión">Comprensión</option>
            <option value="Acceso a la información">Acceso a la información</option>
            <option value="Conceptualización">Conceptualización</option>
            <option value="Transferencia">Transferencia</option>
          </select>
          <Button onClick={generarPlaneacion} className="w-full mt-2">Generar planeación</Button>
        </CardContent>
      </Card>

      {planeacion && (
        <Card>
          <CardContent className="p-4">
            <h2 className="font-bold text-lg mb-2">Planeación generada</h2>
            <p>{planeacion}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

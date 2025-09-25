import { SetStateAction, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation"
import Welcome from "../components/welcome"
import Videos from "../components/videos"
import Images from "../components/images"
import Todo from "../components/todo";
import InProgress from "../components/inprogress";
import Complete from "../components/complete";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [todoTasks, setTodoTasks] = useState<string[]>(["Task 1", "Task 2", "Task 3"]);
  const [inProgressTasks, setInProgressTasks] = useState<string[]>([]);
  const [completeTasks, setCompleteTasks] = useState<string[]>([]);

  // Handle navigation click
  const handleNavClick = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };
  
  // Move task from To Do to In Progress
  const moveToInProgress = (idx: number) => {
    setInProgressTasks([...inProgressTasks, todoTasks[idx]]);
    setTodoTasks(todoTasks.filter((_, i) => i !== idx));
  };

  // Move task from In Progress to Complete
  const moveToComplete = (idx: number) => {
    setCompleteTasks([...completeTasks, inProgressTasks[idx]]);
    setInProgressTasks(inProgressTasks.filter((_, i) => i !== idx));
  };

  return (
    <div>

      {/* Deliverable 1 */}
      <Navigation onNavClick={handleNavClick}></Navigation>
      {activeSection === "home" &&
        <Welcome></Welcome>
      }
      {activeSection === "video" &&
        <Videos></Videos>
      }
      {activeSection === "images" &&
        <Images></Images>
      }

      {/* Deliverable 2 */}
      {activeSection === "tasks" && (
        <div className="container mt-4">
          <Row>
            <Col md={4}>
              <Todo tasks={todoTasks} moveToInProgress={moveToInProgress} />
            </Col>
            <Col md={4}>
              <InProgress tasks={inProgressTasks} moveToComplete={moveToComplete} />
            </Col>
            <Col md={4}>
              <Complete tasks={completeTasks} />
            </Col>
          </Row>
        </div>
      )}


    </div>
  );
}

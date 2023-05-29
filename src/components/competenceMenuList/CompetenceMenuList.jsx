import "./CompetenceMenuList.css"
const competenceMenuList = ({title, active, setSelected, id}) => {
  return (
    <li className= {active ? "competenceMenuList aktiv" : "competenceMenuList"} onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}

export default competenceMenuList
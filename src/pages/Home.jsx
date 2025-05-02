import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<img className="pulser" src="https://i.pinimg.com/originals/46/6b/42/466b422c6a1ce24a6c4e20e62832d72a.gif"></img>

			<p className="fuentemario Tamaño ">
				<span className="text-primary" >B    </span>
				<span className="text-warning" >I    </span>
				<span className="text-danger"> E    </span>
				<span className="text-success" >N    </span>
				<span className="text-warning" >V    </span>
				<span className="text-danger" >E    </span>
				<span className="text-success" >N    </span>
				<span className="text-warning" >I    </span>
				<span className="text-primary" >D     </span>
				<span className="text-success" >O     </span>
			</p>
		</>


	);
}; 
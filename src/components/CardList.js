import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((user, i) => {
				/*prettier-ignore*/
				return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                            username={robots[i].username}
                        />
		            );
			})}
		</div>
	);
};

export default CardList;

import { gql } from "@apollo/client";


const queries = {
	getAllConferences: gql`
		query {
			conferences {
				id
				name
				startDate
				schedules {
					intervals {
						sessions {
							description
							day
							begin
							end
						}
					}
				}
				speakers {
					name
					aboutShort
					image {
						url
					}
				}
			}
		}
	`,
};

export default queries;
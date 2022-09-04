import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SideBar from "../components/SideBar";
import ConferenceContent from "../components/ConferenceContent";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
const query = gql`
  query ($id: ID!) {
    conference(id: $id) {
      id
      name
      startDate
      locations {
        address
      }
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
      sponsors {
        name
        company
        aboutShort
      }
      speakers {
        name
        social {
          linkedin
        }
        aboutShort
        company
        image {
          url
        }
      }
    }
  }
`;
function ConferencePage() {
  const router = useRouter();
  const [speakers, setSpeakers] = useState([]);

  const { data, loading, error } = useQuery(query, {
    variables: {
      id: router.query.conferenceId,
    },
    notifyOnNetworkStatusChange: true,
  });
  // useEffect(() => {}, []);

  // useEffect(() => {
  //     if (error) {
  //         console.log(error);
  //     }
  //     if (data) {
  //         console.log(data);
  //     }
  // }, [data, error]);

  return (
    <div className="p-4">
      <Head>
        <title>Lemon Hive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" max-w-[1320px] mx-auto">
        <div>
          <div className=" sm:h-[32px] lg:h-[48px] "></div>
          <h2 className=" text-h2 font-bold text-darkblue">Conference info</h2>
          <p className=" mt-[16px] text-p font-regular text-shadowGrey">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
            quo assumenda, sapiente officia accusamus doloribus recusandae
            minima quaerat facere, neque saepe enim maiores voluptatibus amet
            quod alias reprehenderit autem exercitationem!
          </p>
          <div>
            <div className="view-conference flex sm:gap-6 lg:gap-14 sm:flex-wrap md:flex-nowrap lg:mt-10">
              <SideBar />
              <ConferenceContent
                speakers={data?.conference?.speakers}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConferencePage;

import React from "react";
import { Button } from "react-bootstrap";

const League = () => {
    return (
        <div id="leagueInfo" style={{ margin: "100px" }}>
            <h2>League</h2>
            <div id="overview" className="leagueInfo">
                <h3>Overview</h3>
                <hr />
                <p>
                    The world of basketball encompasses various leagues that contribute to the sport's global appeal. The NBA 
                    stands as the pinnacle of professional men's basketball, captivating fans with its fast-paced and iconic games. 
                    Its counterpart, the WNBA, shines a spotlight on remarkable female athletes, promoting gender equality and 
                    inspiring women in sports. The NBA G League, on the other hand, serves as a developmental stepping stone for 
                    aspiring players, offering them a chance to refine their skills and transition to the NBA while also serving as 
                    an experimental ground for innovative basketball ideas. Together, these leagues create a rich tapestry of 
                    basketball excellence that resonates with fans worldwide.
                </p>
            </div>
            <div id="nbaInfo" className="leagueInfo">
                <Button variant="info" href="https://www.nba.com/" target="_blank" style={{ float: "right" }}>More Info</Button>
                <h3>About the NBA</h3>
                <hr />
                <p>
                    The NBA stands as one of the premier professional basketball leagues globally, captivating fans with its
                    fast-paced and thrilling games. Established in 1946, the NBA has evolved into a cultural phenomenon that
                    transcends borders, bringing together athletes from diverse backgrounds to showcase their unparalleled skills
                    on the court. The league is renowned for its iconic players, such as Michael Jordan, LeBron James, and Kobe
                    Bryant, who have left an indelible mark on the sport's history. With its high-flying dunks, precision
                    three-point shots, and intense rivalries, the NBA continues to draw massive audiences and inspire countless
                    individuals, both young and old, fostering a deep love for basketball and the spirit of competition.
                </p>
            </div>
            <div id="wnbaInfo" className="leagueInfo">
                <Button variant="info" href="https://www.wnba.com/" target="_blank" style={{ float: "right" }}>More Info</Button>
                <h3>About the WNBA</h3>
                <hr />
                <p>
                    The WNBA (Women's National Basketball Association) stands as a beacon of excellence within the realm of women's 
                    sports, providing a platform for incredibly talented female athletes to showcase their basketball prowess. 
                    Founded in 1996, the WNBA has grown to become a vital part of the sports landscape, offering fans exciting and 
                    skillful games that mirror the intensity of its male counterpart, the NBA. The league has produced remarkable 
                    players like Lisa Leslie, Diana Taurasi, and Sue Bird, who have shattered records and garnered widespread 
                    recognition for their contributions to the game. Through its dedication to promoting gender equality and 
                    empowering women in sports, the WNBA has not only elevated women's basketball but also sparked meaningful 
                    conversations about representation and opportunities for female athletes on a global scale.
                </p>
            </div>
            <div id="nbaGInfo" className="leagueInfo">
                <Button variant="info" href="https://gleague.nba.com/" target="_blank" style={{ float: "right" }}>More Info</Button>
                <h3>About the NBA G League</h3>
                <hr />
                <p>
                    The NBA G League (formerly known as the NBA Development League or NBA D-League) serves as the NBA's official
                    minor league, providing players with opportunities to develop their skills and gain valuable experience in
                    preparation for the NBA. Founded in 2001, the NBA G League has grown to become a vital part of the NBA's
                    player development system, with 28 teams affiliated with NBA franchises. The league has produced notable
                    players like Pascal Siakam, Fred VanVleet, and Danny Green, who have gone on to win NBA championships and
                    achieve success at the highest level. Through its dedication to developing players, coaches, and referees,
                    the NBA G League continues to play a pivotal role in the NBA's success, providing a platform for athletes to
                    hone their skills and reach their full potential.
                </p>
            </div>
            <div id="nba2kInfo" className="leagueInfo">
                <Button variant="info" href="https://2kleague.nba.com/" target="_blank" style={{ float: "right" }}>More Info</Button>
                <h3>About the NBA 2K League</h3>
                <hr />
                <p>
                    The NBA 2K League stands as the first official esports league co-founded by the NBA and Take-Two Interactive
                    Software, Inc., providing fans with an exciting and innovative way to experience the game of basketball.
                    Launched in 2018, the NBA 2K League has grown to become a global phenomenon, with 23 teams competing in
                    tournaments and events throughout the year. During the 2019 season, the league partners included AT&T,
                    Champion Athleticwear, Dell, New Era, Raynor Gaming, SCUF Gaming, Snickers, and Stance. Through its
                    dedication to promoting esports and gaming, the NBA 2K League continues to push the boundaries of
                    entertainment, bringing together fans from all over the world to celebrate the sport of basketball.
                </p>
            </div>
            <div id="balInfo" className="leagueInfo">
                <Button variant="info" href="https://bal.nba.com/" target="_blank" style={{ float: "right" }}>More Info</Button>
                <h3>About the Basketball Africa League</h3>
                <hr />
                <p>
                    The Basketball Africa League (BAL) stands as a historic collaboration between the NBA and FIBA, providing
                    fans with an exciting and innovative way to experience the game of basketball. Launched in 2021, the BAL
                    has grown to become a global phenomenon, with 12 club teams competing in tournaments and events throughout
                    the year. Headquartered in Dakar, Senegal, the BAL marks the NBA's first collaboration to operate a league
                    outside of North America. Fans can follow the BAL on Twitter, Instagram, Facebook, and YouTube at
                    @theBAL.
                </p>
            </div>
        </div>
    );
};

export default League;

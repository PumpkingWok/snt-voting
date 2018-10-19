import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import React, {Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const HowVotingWorks = (props) => <Fragment><div className="section">
  <Typography variant="headline">How voting works</Typography>
  <Card className="card">
    <CardContent>
      <div className="left">
        <span><img src="images/wallet.svg" width="23" /></span>
      </div>
      <div>
        <Typography gutterBottom component="h2">
          Any wallet with SNT can vote
        </Typography>
        <Typography component="p">
          When a poll is created a snapshot is taken of every wallet that holds Status Network Tokens (SNT).
        </Typography>
      </div>
    </CardContent>
  </Card>
  <Card className="card">
    <CardContent>
      <div className="left">
        <span><img src="images/happy-face.svg" width="23" /></span>
      </div>
      <div>
        <Typography gutterBottom component="h2">
          You don't spend your SNT!
        </Typography>
        <Typography component="p">
          Your wallet gets one voting credit for every SNT it holds. To cast your vote, you sign a transaction, but you only spend a small amount of ETH for the transaction fee.
        </Typography>
      </div>
    </CardContent>
  </Card>
  <Card className="card">
    <CardContent>
      <div className="left">
        <span><img src="images/envelope.svg" width="23" /></span>
      </div>
      <div>
        <Typography gutterBottom component="h2">
        Your vote counts
        </Typography>
        <Typography component="p">
          Most votes when poll ends wins! Multiple votes cost more to prevent whales from controlling the vote
        </Typography>
      </div>
    </CardContent>
  </Card>
</div>
<div className="buttonNav">
  <Link to="/wallet"><Button>Connect with your wallet</Button></Link>
</div>
</Fragment>;

export default HowVotingWorks;
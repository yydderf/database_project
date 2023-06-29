import { CAvatar, CFooter, CLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cibMysql, cibReact, cibCoreui, cibBootstrap } from "@coreui/icons";

export default function Footer() {
	return (
		<CFooter className="bg-black border-black text-light">
			<div>
				<span>Author: </span>
				<CAvatar src="https://avatars.githubusercontent.com/u/29942932?v=4" size="sm" />
				<CLink href="https://github.com/yydderf" className="text-info">ydderf </CLink>
				<CAvatar src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-1/295975682_3170859873157063_1241502614504319055_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sncmUBDwoTcAX-mozc5&_nc_ht=scontent-tpe1-1.xx&oh=00_AfCwf-lKtFuSACOehE0QSof_LEEcJs32aVXpOVvJsqhMWg&oe=6482F851" size="sm" />
				<CLink href="https://github.com/huangweim"className="text-info">huangweim </CLink>
				<span>&copy; 2023 Database Project.</span>
			</div>
			<div>
				<span>Powered by </span>
				<CIcon icon={cibReact}  size="lg" />
				<span>   </span>
				<CIcon icon={cibMysql}  size="lg" />
				<span>   </span>
				<CIcon icon={cibCoreui} size="lg" />
				<span>   </span>
				<CIcon icon={cibBootstrap} size="lg"/>
				<span>   </span>
			</div>
		</CFooter>
	)
}
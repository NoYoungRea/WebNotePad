package kr.co.team.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.naming.NamingException;

import kr.co.team.controller.DbManager;
import kr.co.team.vo.GroupToMemberListVO;
import kr.co.team.vo.GroupVO;
import kr.co.team.vo.ThemeMemberVO;

public class GroupToMemberListDAO {
	public void delete(int code, int groupCode) {
		String sql="DELETE FROM group_to_member_list WHERE member_code=? AND group_code=?";
		//멤버코드와 그룹코드가 일치하면 그룹리스트에서 삭제쿼리
		Connection con = null;
		PreparedStatement stmt = null;
		
		try {
			con=DbManager.getConnection();
			stmt=con.prepareStatement(sql);
			stmt.setInt(1, code);
			stmt.setInt(2, groupCode);
			stmt.executeUpdate();
		}
		catch(NamingException e) {
			e.printStackTrace();
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
		finally {
			DbManager.close(stmt, con);
		}
	}
	
	public void insert(GroupVO m) {
		String sql="insert into group_to_member_list values(default,?,?)";
		Connection con = null;
		PreparedStatement stmt = null;
		
		try {
			con=DbManager.getConnection(); 
			stmt=con.prepareStatement(sql);
			stmt.setInt(1, m.getGroup_code());
			stmt.setInt(2,m.getGroup_leader_code());
			stmt.executeUpdate();
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally {
			DbManager.close(stmt, con);
		}
	 }


	public ThemeMemberVO searchBythemeName(ThemeMemberVO m) {
		 String sql="select*from theme_member where theme_member_name='"+m.getThemeMember_name()+"'and member_code='"+m.getMember_code()+"'";
		 Connection con = null;
		 Statement stmt=null;
		 ResultSet rs=null;
		 
		 ThemeMemberVO themeMemberVO=null;
		 try {
			con=DbManager.getConnection();
			stmt=con.createStatement();
			rs=stmt.executeQuery(sql);

			if(rs.next()) {
				themeMemberVO=new ThemeMemberVO();
				themeMemberVO.setSuper_themeMember_code(rs.getInt("super_theme_member_code"));
				themeMemberVO.setThemeMember_code(rs.getInt("theme_member_code"));
				themeMemberVO.setThemeMember_name(rs.getString("theme_member_name"));
				themeMemberVO.setMember_code(rs.getInt("theme_member_code"));
			}
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbManager.close(rs, stmt, con);
		}

		 return themeMemberVO;
	 }
	
	
}

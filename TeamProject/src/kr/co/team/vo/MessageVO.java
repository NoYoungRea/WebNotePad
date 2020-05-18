package kr.co.team.vo;

public class MessageVO {
	private int message_code;
	private int caller_code;
	private int receiver_code;
	private String content;
	private String regdate;
	public MessageVO() {
		super();
	}
	public int getMessage_code() {
		return message_code;
	}
	public void setMessage_code(int message_code) {
		this.message_code = message_code;
	}
	public int getCaller_code() {
		return caller_code;
	}
	public void setCaller_code(int caller_code) {
		this.caller_code = caller_code;
	}
	public int getReceiver_code() {
		return receiver_code;
	}
	public void setReceiver_code(int receiver_code) {
		this.receiver_code = receiver_code;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + caller_code;
		result = prime * result + ((content == null) ? 0 : content.hashCode());
		result = prime * result + message_code;
		result = prime * result + receiver_code;
		result = prime * result + ((regdate == null) ? 0 : regdate.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MessageVO other = (MessageVO) obj;
		if (caller_code != other.caller_code)
			return false;
		if (content == null) {
			if (other.content != null)
				return false;
		} else if (!content.equals(other.content))
			return false;
		if (message_code != other.message_code)
			return false;
		if (receiver_code != other.receiver_code)
			return false;
		if (regdate == null) {
			if (other.regdate != null)
				return false;
		} else if (!regdate.equals(other.regdate))
			return false;
		return true;
	}
	
}
